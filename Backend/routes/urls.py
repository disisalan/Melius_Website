from flask import Blueprint

routes_bp = Blueprint('routes', __name__)

@routes_bp.route(('contactus/', methods=['GET', 'POST'])
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
        except:
            response = {"error": "an error occured"}
            return jsonify(response), 500

    elif request.method == 'POST':
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