from flask import Blueprint, request, jsonify
from models.student_model import db, Student

student_bp = Blueprint('student_bp', __name__, url_prefix='/api')

# GET /students - Read all students
@student_bp.route('/students', methods=['GET'])
def get_students():
    try:
        students = Student.query.order_by(Student.id.desc()).all()
        return jsonify([student.to_dict() for student in students]), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# POST /students - Create a student
@student_bp.route('/students', methods=['POST'])
def add_student():
    data = request.get_json()
    
    # Validation
    if not data or not all(k in data for k in ('name', 'email', 'course', 'phone')):
        return jsonify({'error': 'Missing required fields'}), 400
        
    # Check if email already exists
    if Student.query.filter_by(email=data['email']).first():
        return jsonify({'error': 'Email already exists'}), 400
        
    try:
        new_student = Student(
            name=data['name'],
            email=data['email'],
            course=data['course'],
            phone=data['phone']
        )
        db.session.add(new_student)
        db.session.commit()
        return jsonify({'message': 'Student added successfully', 'student': new_student.to_dict()}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

# PUT /students/<id> - Update a student
@student_bp.route('/students/<int:id>', methods=['PUT'])
def update_student(id):
    data = request.get_json()
    student = Student.query.get_or_404(id)
    
    try:
        if 'name' in data:
            student.name = data['name']
        if 'email' in data:
            # Check if new email conflicts with another student
            existing = Student.query.filter_by(email=data['email']).first()
            if existing and existing.id != id:
                return jsonify({'error': 'Email already in use by another student'}), 400
            student.email = data['email']
        if 'course' in data:
            student.course = data['course']
        if 'phone' in data:
            student.phone = data['phone']
            
        db.session.commit()
        return jsonify({'message': 'Student updated successfully', 'student': student.to_dict()}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

# DELETE /students/<id> - Delete a student
@student_bp.route('/students/<int:id>', methods=['DELETE'])
def delete_student(id):
    student = Student.query.get_or_404(id)
    try:
        db.session.delete(student)
        db.session.commit()
        return jsonify({'message': 'Student deleted successfully'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

# GET /students/<id> - Read single student
@student_bp.route('/students/<int:id>', methods=['GET'])
def get_student(id):
    student = Student.query.get_or_404(id)
    return jsonify(student.to_dict()), 200
