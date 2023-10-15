from flask import Blueprint , request , jsonify , Flask
from admin.models import ContactUs,db , BlogPost , Member , Project
from flask_mail import Mail
from flask_mail import Message
import os
routes_bp = Blueprint('routes', __name__)
app = Flask(__name__)
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = "meliuswebsite@gmail.com"
app.config['MAIL_PASSWORD'] = ''
app.config['MAIL_USE_TLS'] = True
# app.config['MAIL_USE_SSL'] = True
mail = Mail(app)
@routes_bp.route('project/<int:id>', methods=['GET'])
def get_project(id):
    try:
        project = Project.query.get(id)
        return jsonify({
            "id": project.id,
            "name": project.name,
            "partner": project.partner,
            "brief": project.brief,
            "pdf_link": project.pdf_link,
            "date": project.date.strftime('%Y-%m-%d') if project.date else None,
            "photo": project.photo,
            "instagram": project.instagram_link,
            "linkedin": project.linkedin_link
        })
    except Exception as e:
        print(e)
        return jsonify({"error":"something went wrong"}),200

@routes_bp.route('/blog_posts/<int:post_id>', methods=['GET'])
def get_one_blog_post(post_id):
    post = BlogPost.query.get_or_404(post_id)
    return jsonify({
        "id": post.id,
        "title": post.title,
        "thumbnail": post.thumbnail,
        "description": post.description,
        "created_on": post.created_on,
        "is_public": post.is_public,
        "image1": post.image1,
        "image2": post.image2
    })

#all public blog posts
@routes_bp.route('/blog_posts/', methods=['GET'])
def get_all_blog_posts():
    posts = BlogPost.query.filter_by(is_public=True).all()
    response = []
    for post in posts:
        response.append({
            "id": post.id,
            "title": post.title,
            "thumbnail": post.thumbnail,
            "description": post.description,
            "created_on": post.created_on,
            "is_public": post.is_public,
            "image1": post.image1,
            "image2": post.image2,
            "instagram": post.instagram_link,
            "linkedin": post.linkedin_link,
            "pdf_link": post.pdf_link,
            "drive_link": post.drive_link,
            "venue": post.venue,
            "mode": post.mode,
            "date": post.date.strftime('%Y-%m-%d') if post.date else None,
            "time": post.time
        })
    return jsonify(response)

#all public members
@routes_bp.route('/members/', methods=['GET'])
def get_all_members():
    members = Member.query.filter_by(is_public=True).order_by(Member.order).all()
    response = []
    for member in members:
        response.append({
            "id": member.id,
            "name": member.name,
            "image": member.image,
            "position": member.position,
            "is_active": member.is_active,
            "is_core": member.is_core,
            "instagram": member.instagram_link,
            "linkedin": member.linkedin_link,
            "course": member.course
        })
    return jsonify(response)

#all public projects
@routes_bp.route('/projects/', methods=['GET'])
def get_all_projects():
    projects = Project.query.filter_by(is_public=True).all()
    response = []
    for project in projects:
        response.append({
            "id": project.id,
            "name": project.name,
            "partner": project.partner,
            "brief": project.brief,
            "pdf_link": project.pdf_link,
            "date": project.date.strftime('%Y-%m-%d') if project.date else None,
            "photo": project.photo,
            "instagram": project.instagram_link,
            "linkedin": project.linkedin_link
        })
    return jsonify(response)


@routes_bp.route('contactus/', methods=['POST'])
def contactus():
    if request.method == 'POST':
        try:
            request_data = request.get_json()
            name = request_data['name']
            description = request_data['description']
            email = request_data['email']
            new_instance = ContactUs(
                name=name, description=description, email=email)
            db.session.add(new_instance)
            db.session.commit()
            msg = Message(f'New contact request by {name}', sender = 'meliuswebsite@gmail.com', recipients = ['namansaksham13@gmail.com'])
            msg.body = f"{name} has contacted you. \n\nEmail: {email}\n\nDescription: {description}"
            mail.send(msg)
            return jsonify({'msg': 'success'}), 200
        except Exception as e:
            print(e)
            response = {"error": "an error occured"}
            return jsonify(response), 500

#serve images in profile_pictures folder
#serve images in blog_pictures folder
#serve images in project_pictures folder

@routes_bp.route('/blog_pictures/<string:filename>', methods=['GET'])
def get_blog_picture(filename):
    return send_from_directory(os.path.join(app.root_path, 'blog_pictures'), filename)

@routes_bp.route('/profile_pictures/<string:filename>', methods=['GET'])
def get_profile_picture(filename):
    return send_from_directory(os.path.join(app.root_path, 'profile_pictures'), filename)

@routes_bp.route('/project_pictures/<string:filename>', methods=['GET'])
def get_project_picture(filename):
    return send_from_directory(os.path.join(app.root_path, 'project_pictures'), filename)