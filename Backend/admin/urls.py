
from flask import Blueprint, request, jsonify
from .models import db, BlogPost, Member, ContactUs
admin_bp = Blueprint('admin', __name__)


@admin_bp.route('contactus/', methods=['GET', 'POST'])
def contactus():
    if request.method == 'GET':
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
    elif request.method == 'POST':
        request_data = request.get_json()
        name = request_data['name']
        description = request_data['description']
        email = request_data['email']
        new_instance = ContactUs(
            name=name, description=description, email=email)
        db.session.add(new_instance)
        db.session.commit()
        return jsonify({'msg': 'success'}), 200


@admin_bp.route('members/', methods=['GET', 'POST', 'PUT', 'DELETE'])
def members():
    if request.method == 'GET':
        members = Member.query.all()
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
        member_id = request.json.get("id")
        member = Member.query.get(member_id)
        member.name = request.json.get("name")
        member.image = request.json.get("image")
        member.position = request.json.get("position")
        member.order = request.json.get("order")
        member.is_public = request.json.get("is_public")
        member.is_active = request.json.get("is_active")
        db.session.commit()
        return jsonify({"message": "Member updated successfully"})

    elif request.method == 'POST':
        name = request.json.get("name")
        image = request.json.get("image")
        position = request.json.get("position")
        order = request.json.get("order")
        is_public = request.json.get("is_public")
        is_active = request.json.get("is_active")
        new_member = Member(name=name, image=image, position=position, order=order,
                            is_public=is_public, is_active=is_active)
        db.session.add(new_member)
        db.session.commit()
        return jsonify({"message": "Member created successfully"})

    elif request.method == 'DELETE':
        member_id = request.args.get("id")
        member = Member.query.get(member_id)
        db.session.delete(member)
        db.session.commit()
        return jsonify({"message": "Member deleted successfully"})
=======
from flask import Blueprint , request , jsonify
from .models import db, BlogPost,Member,ContactUs
admin_bp = Blueprint('admin', __name__)

@admin_bp.route('contactus/',methods=['GET','POST'])
def contactus():
    if request.method=='GET':
        all_instances = ContactUs.query.all()
        response = []
        for instance in all_instances:
            response.append({
                'id':instance.id,
                'name':instance.name,
                'description':instance.description,
                'email':instance.email,
                'created_on':instance.created_on
            })
        return jsonify(response),200
    elif request.method=='POST':
        request_data = request.get_json()
        name = request_data['name']
        description = request_data['description']
        email = request_data['email']
        new_instance = ContactUs(name=name,description=description,email=email)
        db.session.add(new_instance)
        db.session.commit()
        return jsonify({'msg':'success'}),200

@admin_bp.route('members/')
def members():
    # if get request then do something
    # if post request then do something
    # if put request then do something
    # if delete request then do something

    return 'Welcome to Admin!'

@admin_bp.route('blogpost/')
def blogpost():
    # if get request then do something
    # if post request then do something
    # if put request then do something
    # if delete request then do something
    return 'Welcome to Admin!'

