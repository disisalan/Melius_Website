from flask import Flask
from routes.urls import routes_bp
from admin.urls import admin_bp

app = Flask(__name__)

app.register_blueprint(routes_bp , url_prefix="/")
app.register_blueprint(admin_bp , url_prefix="admin/")


if __name__ == '__main__':
    app.run(debug=True)