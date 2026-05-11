document.getElementById('addStudentForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const submitIcon = document.getElementById('submitIcon');
    const submitSpinner = document.getElementById('submitSpinner');
    
    // Loading state
    submitBtn.disabled = true;
    submitIcon.classList.add('d-none');
    submitSpinner.classList.remove('d-none');
    
    const data = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        course: document.getElementById('course').value.trim(),
        phone: document.getElementById('phone').value.trim()
    };
    
    try {
        const response = await fetch('/api/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (response.ok) {
            showAlert('success', 'Student added successfully! Redirecting to dashboard...');
            setTimeout(() => {
                window.location.href = '/';
            }, 1500);
        } else {
            showAlert('danger', result.error || 'Failed to add student.');
            // Reset button state
            submitBtn.disabled = false;
            submitIcon.classList.remove('d-none');
            submitSpinner.classList.add('d-none');
        }
    } catch (error) {
        showAlert('danger', 'An error occurred connecting to the server. Please try again.');
        // Reset button state
        submitBtn.disabled = false;
        submitIcon.classList.remove('d-none');
        submitSpinner.classList.add('d-none');
    }
});

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
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
