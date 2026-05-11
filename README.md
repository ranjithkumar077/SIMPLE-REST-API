# SoftGrowTech Student Management REST API

A complete professional Backend Development Project for **SoftGrowTech Internship Task 1**.

## 🚀 Project Overview
The Student Management REST API is a robust CRUD (Create, Read, Update, Delete) application built using Python Flask, SQLAlchemy, and SQLite. It provides a RESTful backend API alongside a modern, dark-themed, and responsive web frontend built with HTML, CSS, and Bootstrap 5.

## ✨ Features
- **Add Student**: Register new students with validation.
- **View All Students**: Interactive dashboard to view student records.
- **Update Student Details**: Modify existing student information seamlessly.
- **Delete Student**: Secure deletion of student records.
- **Search Functionality**: Filter students by name, email, or course in real-time.
- **RESTful API**: Standardized endpoints for cross-platform integration.
- **Responsive UI**: Professional dark-mode design optimized for both desktop and mobile.

## 🛠️ Technologies Used
- **Backend**: Python, Flask, Flask-SQLAlchemy (ORM), Flask-CORS
- **Database**: SQLite
- **Frontend**: HTML5, CSS3, JavaScript (Fetch API), Bootstrap 5
- **Icons**: FontAwesome

## 📁 Project Structure
```text
SoftGrowTech_Student_API/
│
├── app.py                  # Main Flask application entry point
├── requirements.txt        # Python dependencies
├── README.md               # Project documentation
├── config.py               # Application configuration
│
├── models/
│   └── student_model.py    # SQLAlchemy database model
│
├── routes/
│   └── student_routes.py   # REST API endpoints (Blueprints)
│
├── templates/              # HTML Frontend pages
│   ├── index.html
│   ├── add_student.html
│   └── edit_student.html
│
├── static/                 # Static assets
│   ├── css/style.css       # Custom styles
│   └── js/                 # Frontend logic
│       ├── main.js
│       ├── add_student.js
│       └── edit_student.js
│
└── database/               # SQLite database storage
    └── students.db
```

## 🔌 API Endpoints
| HTTP Method | Endpoint | Description |
|---|---|---|
| **GET** | `/api/students` | Fetch all students |
| **GET** | `/api/students/<id>` | Fetch a single student by ID |
| **POST** | `/api/students` | Create a new student |
| **PUT** | `/api/students/<id>`| Update an existing student |
| **DELETE**| `/api/students/<id>`| Delete a student |

## ⚙️ Installation & Setup Guide

### Prerequisites
- Python 3.8+ installed on your system.

### Step 1: Clone or Download the Project
Download the repository to your local machine and open it in VS Code or your preferred IDE.

### Step 2: Create a Virtual Environment (Recommended)
Open your terminal inside the project folder and run:
```bash
python -m venv venv
```
Activate the virtual environment:
- **Windows**: `venv\Scripts\activate`
- **Mac/Linux**: `source venv/bin/activate`

### Step 3: Install Dependencies
Run the following command to install required packages:
```bash
pip install -r requirements.txt
```

### Step 4: Run the Application
Start the Flask development server:
```bash
python app.py
```

### Step 5: Access the Application
Open your web browser and go to:
`http://127.0.0.1:5000`

## 📤 GitHub Upload Steps
To upload this project to your GitHub account as part of your internship submission:
1. Create a new repository on GitHub.
2. Open terminal in this project folder and run:
```bash
git init
git add .
git commit -m "Initial commit - SoftGrowTech Task 1"
git branch -M main
git remote add origin <your-repository-url>
git push -u origin main
```
Note: A `.gitignore` file has already been added to avoid committing virtual environment files.

---

# 📸 Project Screenshots

## 🏠 Student Dashboard

The main dashboard displays all student records in a professional dark-themed table interface with search functionality and CRUD operation buttons.

<img width="1919" height="899" alt="Screenshot 2026-05-11 175501" src="https://github.com/user-attachments/assets/e6b58d8b-0c40-4866-84e9-cbac6aed57e3" />


---

## ➕ Add Student

Users can add new student details including name, email, course, and phone number using a clean responsive form.

<img width="1918" height="911" alt="Screenshot 2026-05-11 175536" src="https://github.com/user-attachments/assets/f1d0739f-6c77-4f73-b876-ad2937875d3b" />
 After Adding Student Details.
<img width="1919" height="908" alt="Screenshot 2026-05-11 175648" src="https://github.com/user-attachments/assets/9c2d8a21-73ac-4cef-b88b-6c81823d63f8" />


---

## ✏️ Update Student

The update feature allows users to edit and modify existing student information easily.

<img width="1919" height="907" alt="Screenshot 2026-05-11 175722" src="https://github.com/user-attachments/assets/04d7f370-0981-4e72-93e8-309b7ef5234c" />

 After Updated Student Details (g karthik).

 <img width="1919" height="904" alt="Screenshot 2026-05-11 175739" src="https://github.com/user-attachments/assets/5108d547-ab90-4ce9-8d90-eb20cee30f01" />

---

## 🗑️ Delete Student

Users can securely delete student records with a confirmation popup before removal.

<img width="1914" height="948" alt="Screenshot 2026-05-11 175800" src="https://github.com/user-attachments/assets/ba68794a-96c5-48ed-859d-5dbfa64f847a" />

After Deleting the Student Detail.

<img width="1918" height="906" alt="Screenshot 2026-05-11 175812" src="https://github.com/user-attachments/assets/a2f45860-a13c-46f7-935d-2e52ef9b3e6c" />

---

# 🔄 CRUD Operations

This project successfully implements complete CRUD operations:

| Operation | Description |
|-----------|-------------|
| **Create** | Add new student records |
| **Read** | View all student records |
| **Update** | Edit existing student details |
| **Delete** | Remove student records |

---
 CREATED BY:
            B Ranjith Kumar
