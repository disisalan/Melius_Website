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