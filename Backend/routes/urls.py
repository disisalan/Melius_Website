from flask import Blueprint , request , jsonify
from admin.models import ContactUs,db
routes_bp = Blueprint('routes', __name__)

@routes_bp.route('contactus/', methods=['GET', 'POST'])
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
            return jsonify({'msg': 'success'}), 200
        except:
            response = {"error": "an error occured"}
            return jsonify(response), 500