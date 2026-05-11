from flask import Flask, render_template
from flask_cors import CORS
from config import Config
from models.student_model import db
from routes.student_routes import student_bp
import os

app = Flask(__name__)
app.config.from_object(Config)

# Enable CORS
CORS(app)

# Initialize Database
db.init_app(app)

# Register Blueprints
app.register_blueprint(student_bp)

# Frontend Routes
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add')
def add_student_page():
    return render_template('add_student.html')

@app.route('/edit/<int:id>')
def edit_student_page(id):
    return render_template('edit_student.html', student_id=id)

if __name__ == '__main__':
    # Ensure database directory exists
    db_dir = os.path.join(app.root_path, 'database')
    os.makedirs(db_dir, exist_ok=True)
    
    with app.app_context():
        db.create_all()
        
    app.run(debug=True)
