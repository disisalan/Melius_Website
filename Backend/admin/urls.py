from flask import Blueprint, request, jsonify , Flask
from .models import db, BlogPost, Member, ContactUs, Project , Admin
import uuid
import os
from PIL import Image
from datetime import datetime
from flask_httpauth import HTTPBasicAuth
from werkzeug.security import generate_password_hash, check_password_hash
from flask_mail import Message

admin_bp = Blueprint('admin', __name__)
auth = HTTPBasicAuth()
app = Flask(__name__)
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = "meliuswebsite@gmail.com"
app.config['MAIL_PASSWORD'] = ''
app.config['MAIL_USE_TLS'] = True
@admin_bp.route('contactus/', methods=['GET'])
@auth.login_required
def contactus():
    if request.method == 'GET':
        try:
            all_instances = ContactUs.query.all()
            response = []
            for instance in all_instances:
                response.append({
                    'id': instance.id,
                    'name': instance.name,
                    'description': instance.description,
                    'email': instance.email,
                    'created_on': instance.created_on
                })
            return jsonify(response), 200
        except Exception as e:
            print(e)
            response = {"error": "an error occured"}
            return jsonify(response), 500
#get route for members
@admin_bp.route('members/', methods=['GET'])
@auth.login_required
def get_members():
    if request.method == 'GET':
        try:
            # Read operation - Fetch members from the database
            members = Member.query.all()
            # Convert the members to a list of dictionaries for JSON response
            members_list = []
            for member in members:
                members_list.append({
                    "id": member.id,
                    "name": member.name,
                    "image": member.image,
                    "position": member.position,
                    "order": member.order,
                    "is_public": member.is_public,
                    "is_active": member.is_active,
                    "is_core": member.is_core,
                    "instagram": member.instagram_link,
                    "linkedin": member.linkedin_link,
                    "course": member.course
                })
            return jsonify(members_list)
        except Exception as e:
            print(e)
            return jsonify({"error":"something went wrong"}),400


@admin_bp.route('members/', methods=['POST', 'PUT', 'DELETE'])
@auth.login_required
def members():

    if request.method == 'PUT':
        try:
            # Update operation - Update an existing member
            id = request.args.get("id")
            member = Member.query.get(id)
            # Update the member's attributes based on the request data
            member.name = request.form["name"] if "name" in request.form.keys() else member.name
            if "image" in request.files:
                image = request.files['image']
                ALLOWED_EXTENSIONS = {'jpg', 'jpeg', 'png'}
                #logic for profie pic:
                file_name, ext = image.filename.split('.')
                if ext not in ALLOWED_EXTENSIONS:
                    return jsonify({"error":"please provide a valid image file (jpg , jpeg and png allowed)"}),200
                file_name = f"{member.name}_profile_{uuid.uuid1()}.{ext}"
                if not os.path.exists(f"profile_pictures"):
                    os.mkdir(f"profile_pictures")
                img = Image.open(image)
                img.thumbnail((600, 600))
                img.save(f"profile_pictures/{file_name}")
                #delete old member image
                os.remove(f"profile_pictures/{member.image}")
                member.image = file_name
            member.position = request.form["position"] if "position" in request.form.keys() else member.position
            member.order = request.form["order"] if "order" in request.form.keys() else member.order
            member.is_public = bool(request.form["is_public"]) if "is_public" in request.form.keys() else member.is_public
            member.is_active = bool(request.form["is_active"]) if "is_active" in request.form.keys() else member.is_active
            member.is_core = bool(request.form["is_core"]) if "is_core" in request.form.keys() else member.is_core
            member.instagram_link = request.form["instagram"] if "instagram" in request.form.keys() else member.instagram_link
            member.linkedin_link = request.form["linkedin"] if "linkedin" in request.form.keys() else member.linkedin_link
            member.course = request.form["course"] if "course" in request.form.keys() else member.course
            # You can also update date_joined and date_left_on if needed

            db.session.commit()
            return jsonify("Member updated successfully")
        except Exception as e:
            print(e)
            return jsonify({"error":"something went wrong"}),200

    elif request.method == 'POST':
        # Create operation - Add a new member
        try:
            name = request.form["name"]
            image = request.files['image']
            position = request.form["position"]
            insgram_link = request.form["instagram"]
            linkedin_link = request.form["linkedin"]
            course = request.form["course"]
            order = request.form["order"]
            if "is_public" in request.form.keys():
                is_public = bool(request.form["is_public"])
            else:
                is_public = False
            if "is_active" in request.form.keys():
                is_active = bool(request.form["is_active"])
            else:
                is_active = False
            if "is_core" in request.form.keys():
                is_core = bool(request.form["is_core"])
            else:
                is_core = False
        except Exception as e:
            print(e)
            return jsonify({"error":"please provide all the feilds"}),200

        try:
            ALLOWED_EXTENSIONS = {'jpg', 'jpeg', 'png'}
            #logic for profie pic:
            file_name, ext = image.filename.split('.')
            if ext not in ALLOWED_EXTENSIONS:
                return jsonify({"error":"please provide a valid image file (jpg , jpeg and png allowed)"}),200
            file_name = f"{name}_profile_{uuid.uuid1()}.{ext}"
            if not os.path.exists(f"profile_pictures"):
                os.mkdir(f"profile_pictures")
            img = Image.open(image)
            img.thumbnail((600, 600))
            img.save(f"profile_pictures/{file_name}")
            # Create a new Member object and add it to the database
            new_member = Member(name=name, image=file_name, position=position, order=order,
                                is_public=is_public, is_active=is_active , is_core=is_core,instagram_link=insgram_link,linkedin_link=linkedin_link,course=course)
            db.session.add(new_member)
            db.session.commit()
            return jsonify("Member created successfully")
        except:
            return jsonify({"error":"something went wrong"}),200

    elif request.method == 'DELETE':
        # Delete operation - Delete a member
        try:
            member_id = request.args.get("id")
            member = Member.query.get(member_id)
            image = member.image
            os.remove(f"profile_pictures/{image}")
            db.session.delete(member)
            db.session.commit()
            return jsonify("Member deleted successfully")
        except:
            return jsonify({"error":"something went wrong"}),200

        # ----------------------------------------------------------Created a Project--------------------------------------------
# get route for projects
@admin_bp.route('project/', methods=['GET'])
@auth.login_required
def get_projects():
    if request.method == 'GET':
        try:
            # Read operation - Fetch members from the database
            projects = Project.query.all()
            # Convert the members to a list of dictionaries for JSON response
            project_list = []
            for project in projects:
                project_list.append({
                    "id": project.id,
                    "name": project.name,
                    "partner": project.partner,
                    "brief": project.brief,
                    "pdf_link": project.pdf_link,
                    "date": project.date.strftime('%Y-%m-%d') if project.date else None,
                    "photo": project.photo,
                    "instagram": project.instagram_link,
                    "linkedin": project.linkedin_link,
                    "is_public": project.is_public
                })
            return jsonify(project_list)
        except Exception as e:
            print(e)
            return jsonify({"error":"something went wrong"}),400

@admin_bp.route('project/', methods=[ 'POST', 'PUT', 'DELETE'])
@auth.login_required
def project():
    if request.method == 'PUT':
        try:
            id = request.args.get("id")
            project = Project.query.get(id)
            project.name = request.form["name"] if "name" in request.form.keys() else project.name
            project.partner = request.form["partner"] if "partner" in request.form.keys() else project.partner
            project.brief = request.form["brief"] if "brief" in request.form.keys() else project.brief
            project.pdf_link = request.form["pdf_link"] if "pdf_link" in request.form.keys() else project.pdf_link
            project.date = request.form["date"] if "date" in request.form.keys() else project.date
            if "is_public" in request.form.keys():
                project.is_public = bool(request.form["is_public"])
            else:
                project.is_public = False
            if "photo" in request.files:
                image = request.files['photo']
                ALLOWED_EXTENSIONS = {'jpg', 'jpeg', 'png'}
                #logic for profie pic:
                file_name, ext = image.filename.split('.')
                if ext not in ALLOWED_EXTENSIONS:
                    return jsonify({"error":"please provide a valid image file (jpg , jpeg and png allowed)"}),200
                file_name = f"{project.name}_project_{uuid.uuid1()}.{ext}"
                if not os.path.exists(f"project_pictures"):
                    os.mkdir(f"project_pictures")
                img = Image.open(image)
                img.thumbnail((600, 600))
                img.save(f"project_pictures/{file_name}")
                #delete old member image
                os.remove(f"project_pictures/{project.photo}")
                project.photo = file_name
            project.instagram_link = request.form["instagram"] if "instagram" in request.form.keys() else project.instagram_link
            project.linkedin_link = request.form["linkedin"] if "linkedin" in request.form.keys() else project.linkedin_link
            db.session.commit()
            return jsonify("Project updated successfully")
        except Exception as e:
            print(e)
            return jsonify({"error":"something went wrong"}),200
    elif request.method == 'POST':
        try:
            name = request.form["name"]
            partner = request.form["partner"]
            brief = request.form["brief"]
            pdf_link = request.form["pdf_link"]
            date = request.form["date"]
            try:
                date_obj = datetime.strptime(date, '%Y-%m-%d')
            except:
                return jsonify({"error":"please provide a valid date in format yyyy-mm-dd"}),200
            date = date_obj
            photo = request.files['photo']
            if photo == None or photo.filename == "":
                return jsonify({"error":"please provide a valid image file"}),200
            instagram_link = request.form["instagram_link"]
            linkedin_link = request.form["linkedin_link"]
            if "is_public" in request.form.keys():
                is_public = bool(request.form["is_public"])
            else:
                is_public = False
        except Exception as e:
            print(e)
            return jsonify({"error":"please provide all the feilds"}),200

        if not os.path.exists(f"project_pictures/"):
           os.mkdir(f"project_pictures/")
        file_name, ext = photo.filename.split('.')
        photo_name = f"{name}_project_{uuid.uuid1()}.{ext}"
        img = Image.open(photo)
        img.thumbnail((600, 600))
        img.save(f"project_pictures/{photo_name}")
        project = Project(
            name=name,
            partner=partner,
            brief=brief,
            pdf_link=pdf_link,
            date=date,
            photo=photo_name,
            instagram_link=instagram_link,
            linkedin_link=linkedin_link
        )
        db.session.add(project)
        db.session.commit()
        return jsonify("Project created successfully")
    elif request.method == 'DELETE':
        try:
            project = Project.query.get(id)
            photo = project.photo
            os.remove(f"project_pictures/{photo}")
            db.session.delete(project)
            db.session.commit()
            return jsonify("Project deleted successfully")
        except Exception as e:
            print(e)
            return jsonify({"error":"something went wrong"}),200



        # ----------------------------------------------------------Created a new blog post--------------------------------------------


@admin_bp.route('/blog_posts', methods=['POST'])
@auth.login_required
def create_blog_post():
    try:
        title = request.form["title"]
        thumbnail = request.files['thumbnail']
        if "image1" in request.files:
            image1 = request.files['image1']
        else:
            image1 = None
        if "image2" in request.files:
            image2 = request.files['image2']
        else:
            image2 = None
        description = request.form["description"]
        is_public = bool(request.form["is_public"])
        instagram_link = request.form["instagram_link"]
        linkedin_link = request.form["linkedin_link"]
        pdf_link = request.form["pdf_link"]
        drive_link = request.form["drive_link"]
        venue = request.form["venue"]
        mode = request.form["mode"]
        date = request.form["date"]
        date = datetime.strptime(date, '%Y-%m-%d')
        time = request.form["time"]
    except Exception as e:
        print(e)
        return jsonify({"error":"please provide all the feilds"}),200

    ALLOWED_EXTENSIONS = {'jpg', 'jpeg', 'png'}
    #logic for post image:
    thumbnail_name, ext = thumbnail.filename.split('.')
    if ext not in ALLOWED_EXTENSIONS:
        return jsonify({"error":"please provide a valid image file (jpg , jpeg and png allowed)"}),200
    thumbnail_name = f"{title}_thumbnail_{uuid.uuid1()}.{ext}"
    if not os.path.exists(f"blog_pictures"):
        os.mkdir(f"blog_pictures")
    img = Image.open(thumbnail)
    img.thumbnail((300, 300))
    img.save(f"blog_pictures/{thumbnail_name}")

    #logic for image1:
    if image1:
        image1_name, ext = image1.filename.split('.')
        if ext not in ALLOWED_EXTENSIONS:
            return jsonify({"error":"please provide a valid image file (jpg , jpeg and png allowed)"}),200
        image1_name = f"{title}_image1_{uuid.uuid1()}.{ext}"
        img = Image.open(image1)
        img.thumbnail((600, 600))
        img.save(f"blog_pictures/{image1_name}")
    else:
        image1_name = None
    
    #logic for image2:
    if image2:
        image2_name, ext = image2.filename.split('.')
        if ext not in ALLOWED_EXTENSIONS:
            return jsonify({"error":"please provide a valid image file (jpg , jpeg and png allowed)"}),200
        image2_name = f"{title}_image2_{uuid.uuid1()}.{ext}"
        img = Image.open(image2)
        img.thumbnail((600, 600))
        img.save(f"blog_pictures/{image2_name}")
    else:
        image2_name = None

    new_post = BlogPost(
        title=title,
        thumbnail=thumbnail_name,
        image1=image1_name,
        image2=image2_name,
        description=description,
        is_public=is_public
    )

    db.session.add(new_post)
    db.session.commit()

    return jsonify({"message": "Blog post created successfully!"}), 201


# --------------------------------------------------------------------------------Get all blog posts------------------------------------------------------

@admin_bp.route('/blog_posts', methods=['GET'])
@auth.login_required
def get_all_blog_posts():
    try:
        posts = BlogPost.query.all()
        blog_posts = [{
            "id": post.id,
            "title": post.title,
            "thumbnail": post.thumbnail,
            "description": post.description,
            "created_on": post.created_on,
            "is_public": post.is_public,
            "image1": post.image1,
            "image2": post.image2,
            "instagram_link": post.instagram_link,
            "linkedin_link": post.linkedin_link,
            "pdf_link": post.pdf_link,
            "drive_link": post.drive_link,
            "venue": post.venue,
            "mode": post.mode,
            "date": post.date.strftime('%Y-%m-%d') if post.date else None,
            "time": post.time}
            for post in posts]
        return jsonify(blog_posts)
    except:
        return jsonify({"error":"something went wrong"}),200

# -----------------------------------------------------------------Update a blog post by ID-------------------------------------------


@admin_bp.route('/blog_posts/<int:post_id>', methods=['PUT'])
@auth.login_required
def update_blog_post(post_id):
    post = BlogPost.query.get_or_404(post_id)
    # data = request.get_json()
    post.title = request.form["title"] if "title" in request.form.keys() else post.title
    if "thumbnail" in request.files:
        thumbnail = request.files['thumbnail']
        ALLOWED_EXTENSIONS = {'jpg', 'jpeg', 'png'}
        #logic for profie pic:
        file_name, ext = thumbnail.filename.split('.')
        if ext not in ALLOWED_EXTENSIONS:
            jsonify({"error":"please provide a valid image file (jpg , jpeg and png allowed)"}),200
        file_name = f"{post.title}_thumbnail_{uuid.uuid1()}.{ext}"
        if not os.path.exists(f"blog_pictures"):
            os.mkdir(f"blog_pictures")
        img = Image.open(thumbnail)
        img.thumbnail((300, 300))
        img.save(f"blog_pictures/{file_name}")
        #delete old member image
        os.remove(f"blog_pictures/{post.thumbnail}")
        post.thumbnail = file_name
    if "image1" in request.files:
        image1 = request.files['image1']
        ALLOWED_EXTENSIONS = {'jpg', 'jpeg', 'png'}
        #logic for profie pic:
        file_name, ext = image1.filename.split('.')
        if ext not in ALLOWED_EXTENSIONS:
            jsonify({"error":"please provide a valid image file (jpg , jpeg and png allowed)"}),200
        file_name = f"{post.title}_image1_{uuid.uuid1()}.{ext}"
        if not os.path.exists(f"blog_pictures"):
            os.mkdir(f"blog_pictures")
        img = Image.open(image1)
        img.thumbnail((600, 600))
        img.save(f"blog_pictures/{file_name}")
        #delete old member image
        os.remove(f"blog_pictures/{post.image1}")
        post.image1 = file_name
    if "image2" in request.files:
        image2 = request.files['image2']
        ALLOWED_EXTENSIONS = {'jpg', 'jpeg', 'png'}
        #logic for profie pic:
        file_name, ext = image2.filename.split('.')
        if ext not in ALLOWED_EXTENSIONS:
            jsonify({"error":"please provide a valid image file (jpg , jpeg and png allowed)"}),200
        file_name = f"{post.title}_image2_{uuid.uuid1()}.{ext}"
        if not os.path.exists(f"blog_pictures"):
            os.mkdir(f"blog_pictures")
        img = Image.open(image2)
        img.thumbnail((600, 600))
        img.save(f"blog_pictures/{file_name}")
        #delete old member image
        os.remove(f"blog_pictures/{post.image2}")
        post.image2 = file_name
    post.description = request.form["description"] if "description" in request.form.keys() else post.description
    post.is_public = bool(request.form["is_public"]) if "is_public" in request.form.keys() else post.is_public
    post.instagram_link = request.form["instagram_link"] if "instagram_link" in request.form.keys() else post.instagram_link
    post.linkedin_link = request.form["linkedin_link"] if "linkedin_link" in request.form.keys() else post.linkedin_link
    post.pdf_link = request.form["pdf_link"] if "pdf_link" in request.form.keys() else post.pdf_link
    post.drive_link = request.form["drive_link"] if "drive_link" in request.form.keys() else post.drive_link
    post.venue = request.form["venue"] if "venue" in request.form.keys() else post.venue
    post.mode = request.form["mode"] if "mode" in request.form.keys() else post.mode
    post.date = datetime.strptime(request.form["date"], '%Y-%m-%d' ) if "date" in request.form.keys() else post.date
    post.time = request.form["time"] if "time" in request.form.keys() else post.time

    db.session.commit()

    return jsonify({"message": "Blog post updated successfully!"})

# ----------------------------------------------------------------- Delete a blog post by ID------------------------------------------------


@admin_bp.route('/blog_posts/<int:post_id>', methods=['DELETE'])
@auth.login_required
def delete_blog_post(post_id):
    post = BlogPost.query.get_or_404(post_id)
    if post.thumbnail:
        os.remove(f"blog_pictures/{post.thumbnail}")
    if post.image1:
        os.remove(f"blog_pictures/{post.image1}")
    if post.image2:
        os.remove(f"blog_pictures/{post.image2}")
    db.session.delete(post)
    db.session.commit()
    return jsonify({"message": "Blog post deleted successfully!"})





@auth.verify_password
def verify_password(username, password):
    user = Admin.query.filter_by(username = username).first()
    if not user:
         return False
    if not check_password_hash(user.password_hash, password):
        return False
    # g.user = user
    return True


@admin_bp.route('/forgotpassword', methods=['POST'])
def forgotpassword():
    username = request.json.get('username')
    # Check for blank requests
    if username is None:
        print("Plwase enter a valid username")
        return (jsonify({'msg': "Please enter a valid username"}), 400)

    # Check for existing users
    if not Admin.query.filter_by(username = username).first():
        return (jsonify({'msg': "Please enter a valid username"}), 400)

    
    password = str(uuid.uuid4())[0:8]
    #check of last reset
    user = Admin.query.filter_by(username = username).first()
    if user.last_reset:
        time_diff = datetime.now() - user.last_reset
        if time_diff.days < 1:
            return (jsonify({'msg': "Please try again after 24 hours"}), 400)
    print(password)
    msg = Message(f'Password reset request!', sender = 'meliuswebsite@gmail.com', recipients = ['namansaksham13@gmail.com'])
    msg.body = f"Your new password is {password} \n\nEmail: {email}\n\nDescription: {description}"
    mail.send(msg)
    #hash password
    hashed_password = generate_password_hash(password)
    #update password
    user.password_hash = hashed_password
    db.session.commit()
    #update last reset
    user.last_reset = datetime.now()
    db.session.commit()
    return (jsonify({'msg': f"password for username : {user.username} mailed to the admin"}), 201)