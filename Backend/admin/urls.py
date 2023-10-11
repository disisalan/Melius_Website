from flask import Blueprint, request, jsonify
from .models import db, BlogPost, Member, ContactUs, Project
import uuid
import os
admin_bp = Blueprint('admin', __name__)


@admin_bp.route('members/', methods=['GET', 'POST', 'PUT', 'DELETE'])
def members():
    if request.method == 'GET':
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
                "date_joined": member.date_joined.isoformat(),
                "date_left_on": member.date_left_on.isoformat() if member.date_left_on else None
            })
        return jsonify(members_list)

    elif request.method == 'PUT':
        # Update operation - Update an existing member
        member_id = request.json.get("id")
        member = Member.query.get(member_id)
        # Update the member's attributes based on the request data
        member.name = request.json.get("name")
        member.image = request.json.get("image")
        member.position = request.json.get("position")
        member.order = request.json.get("order")
        member.is_public = request.json.get("is_public")
        member.is_active = request.json.get("is_active")
        # You can also update date_joined and date_left_on if needed

        db.session.commit()
        return jsonify("Member updated successfully")

    elif request.method == 'POST':
        # Create operation - Add a new member
        try:
            name = request.form["name"]
            image = request.files['image']
            position = request.form["position"]
            order = request.form["order"]
            is_public = bool(request.form["is_public"])
            is_active = bool(request.form["is_active"])
        except Exception as e:
            print(e)
            return jsonify({"error":"please provide all the feilds"}),200


        #logic for profie pic:
        file_name, ext = image.filename.split('.')
        file_name = f"{name}_profile_.{ext}"
        if not os.path.exists(f"profile_pictures/{file_name}"):
            os.mkdir(f"profile_pictures/{file_name}")
        image.save(f"profie_pictures/{file_name}")
        # Create a new Member object and add it to the database
        new_member = Member(name=name, image=file_name, position=position, order=order,
                            is_public=is_public, is_active=is_active)
        db.session.add(new_member)
        db.session.commit()
        return jsonify("Member created successfully")

    elif request.method == 'DELETE':
        # Delete operation - Delete a member
        member_id = request.args.get("id")
        member = Member.query.get(member_id)
        db.session.delete(member)
        db.session.commit()
        return jsonify("Member deleted successfully")

        # ----------------------------------------------------------Created a Project--------------------------------------------

@admin_bp.route('project/', methods=['GET', 'POST', 'PUT', 'DELETE'])
def project():
    if request.method == 'GET':
        project = Project.query.all()
        project_list = []
        for p in project:
            project_list.append({
                "id": project.id,
                "name": project.name,
                "partner": project.partner,
                "brief": project.brief,
                "pdf_link": project.pdf_link,
                "date": project.date.strftime('%Y-%m-%d') if project.date else None,
                "photo_url": project.photo_url,
                "instagram": project.instagram,
                "linkedin": project.linkedin
            })
        return jsonify(project_list)
    elif request.method == 'PUT':
        project_id = Project.query.get(id)
        project = Project.query.get(project_id)
        data = request.get_json()
        project.name = data['name']
        project.partner = data['partner']
        project.brief = data['brief']
        project.pdf_link = data['pdf_link']
        project.date = data['date']
        project.photo_url = data['photo_url']
        project.instagram = data['instagram']
        project.linkedin = data['linkedin']
        db.session.commit()
        return jsonify("Member updated successfully")
    elif request.method == 'POST':
        data = request.get_json()
        name = data.get('name')
        partner = data.get('partner')
        brief = data.get('brief')
        pdf_link = data.get('pdf_link')
        date = data.get('date')
        photo = data.get('photo')
        instagram_link = data.get('instagram_link')
        linkedin_link = data.get('linkedin_link')
        project = Project(
            name=name,
            partner=partner,
            brief=brief,
            pdf_link=pdf_link,
            date=date,
            photo=photo,
            instagram_link=instagram_link,
            linkedin_link=linkedin_link
        )
        db.session.add(project)
        db.session.commit()
        return jsonify("Project created successfully")
    elif request.method == 'DELETE':
        project = Project.query.get(id)
        db.session.delete(project)
        db.session.commit()
        return jsonify("Project deleted successfully!")

        # ----------------------------------------------------------Created a new blog post--------------------------------------------


@admin_bp.route('/blog_posts', methods=['POST'])
def create_blog_post():
    data = request.get_json()

    title = data.get('title')
    thumbnail = data.get('thumbnail')
    image1 = data.get('image1')
    image2 = data.get('image2')
    description = data.get('description')
    is_public = data.get('is_public', True)

    if not title or not thumbnail or not description:
        return jsonify({"error": "Title, thumbnail, and description are required."}), 400

    new_post = BlogPost(
        title=title,
        thumbnail=thumbnail,
        image1=image1,
        image2=image2,
        description=description,
        is_public=is_public
    )

    db.session.add(new_post)
    db.session.commit()

    return jsonify({"message": "Blog post created successfully!"}), 201


# --------------------------------------------------------------------------------Get all blog posts------------------------------------------------------

@admin_bp.route('/blog_posts', methods=['GET'])
def get_all_blog_posts():
    posts = BlogPost.query.all()
    blog_posts = [{
        "id": post.id,
        "title": post.title,
        "thumbnail": post.thumbnail,
        "description": post.description,
        "created_on": post.created_on,
        "is_public": post.is_public}
        for post in posts]
    return jsonify(blog_posts)

# -----------------------------------------------------------------Update a blog post by ID-------------------------------------------


@admin_bp.route('/blog_posts/<int:post_id>', methods=['PUT'])
def update_blog_post(post_id):
    post = BlogPost.query.get_or_404(post_id)
    data = request.get_json()
    post.title = data.get('title', post.title)
    post.thumbnail = data.get('thumbnail', post.thumbnail)
    post.image1 = data.get('image1', post.image1)
    post.image2 = data.get('image2', post.image2)
    post.description = data.get('description', post.description)
    post.is_public = data.get('is_public', post.is_public)

    db.session.commit()

    return jsonify({"message": "Blog post updated successfully!"})

# ----------------------------------------------------------------- Delete a blog post by ID------------------------------------------------


@admin_bp.route('/blog_posts/<int:post_id>', methods=['DELETE'])
def delete_blog_post(post_id):
    post = BlogPost.query.get_or_404(post_id)
    db.session.delete(post)
    db.session.commit()
    return jsonify({"message": "Blog post deleted successfully!"})
