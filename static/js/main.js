document.addEventListener('DOMContentLoaded', () => {
    fetchStudents();

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        const value = this.value.toLowerCase();
        const rows = document.querySelectorAll('#studentsTableBody tr');
        
        rows.forEach(row => {
            if(row.children.length > 1) { // Ignore loading/empty rows
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(value) ? '' : 'none';
            }
        });
    });
});

async function fetchStudents() {
    try {
        const response = await fetch('/api/students');
        const data = await response.json();
        
        const tbody = document.getElementById('studentsTableBody');
        tbody.innerHTML = '';
        
        if (!response.ok) throw new Error(data.error || 'Failed to fetch');

        if (data.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="6" class="text-center py-5 text-secondary">
                        <i class="fas fa-user-graduate fs-1 mb-3 opacity-50"></i>
                        <p class="fs-5 mb-1 fw-medium text-light">No students found</p>
                        <p class="small mb-0">Click "Add Student" to register a new one.</p>
                    </td>
                </tr>
            `;
            return;
        }

        data.forEach((student, index) => {
            const tr = document.createElement('tr');
            tr.className = 'fade-in';
            tr.style.animationDelay = `${index * 0.05}s`;
            tr.innerHTML = `
                <td class="px-4 py-3 fw-medium text-secondary">#${student.id}</td>
                <td class="px-4 py-3">
                    <div class="d-flex align-items-center">
                        <div class="bg-primary bg-opacity-10 text-primary rounded-circle d-flex justify-content-center align-items-center me-3 fw-bold shadow-sm" style="width: 40px; height: 40px;">
                            ${student.name.charAt(0).toUpperCase()}
                        </div>
                        <span class="fw-medium">${student.name}</span>
                    </div>
                </td>
                <td class="px-4 py-3 text-secondary">${student.email}</td>
                <td class="px-4 py-3">
                    <span class="badge bg-dark border border-secondary text-light px-2 py-1">${student.course}</span>
                </td>
                <td class="px-4 py-3 text-secondary">${student.phone}</td>
                <td class="px-4 py-3 text-end">
                    <a href="/edit/${student.id}" class="btn btn-sm btn-outline-info me-2 rounded-circle" style="width: 34px; height: 34px; padding: 0; line-height: 32px;" title="Edit">
                        <i class="fas fa-pen"></i>
                    </a>
                    <button onclick="deleteStudent(${student.id})" class="btn btn-sm btn-outline-danger rounded-circle" style="width: 34px; height: 34px; padding: 0; line-height: 32px;" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    } catch (error) {
        showAlert('danger', 'Failed to load students. Ensure the API is running.');
        document.getElementById('studentsTableBody').innerHTML = `
            <tr>
                <td colspan="6" class="text-center py-5 text-danger">
                    <i class="fas fa-exclamation-triangle fs-2 mb-3"></i>
                    <p class="mb-0">Error loading data from the server.</p>
                </td>
            </tr>
        `;
    }
}

async function deleteStudent(id) {
    if (!confirm('Are you sure you want to delete this student record? This action cannot be undone.')) return;
    
    try {
        const response = await fetch(`/api/students/${id}`, {
            method: 'DELETE'
        });
        
        if (response.ok) {
            showAlert('success', 'Student deleted successfully!');
            fetchStudents(); // Refresh the table
        } else {
            const data = await response.json();
            showAlert('danger', data.error || 'Failed to delete student.');
        }
    } catch (error) {
        showAlert('danger', 'An error occurred while deleting.');
    }
}

function showAlert(type, message) {
    const alertHtml = `
        <div class="alert alert-${type} alert-dismissible fade-in show shadow-sm mb-4 border-0" role="alert">
            <div class="d-flex align-items-center">
                <i class="fas ${type === 'success' ? 'fa-check-circle text-success' : 'fa-exclamation-circle text-danger'} fs-5 me-3"></i>
                <div>${message}</div>
            </div>
            <button type="button" class="btn-close ${type === 'danger' ? 'btn-close-white' : ''}" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
    const placeholder = document.getElementById('alertPlaceholder');
    placeholder.innerHTML = alertHtml;
    
    // Auto close after 5 seconds
    setTimeout(() => {
        const alert = placeholder.querySelector('.alert');
        if (alert) {
            const bsAlert = new bootstrap.Alert(alert);
            bsAlert.close();
        }
    }, 5000);
}
