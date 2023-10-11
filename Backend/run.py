from flask import Flask
from routes.urls import routes_bp
from admin.urls import admin_bp
from admin.models import db as admin_db
from flask_migrate import Migrate


app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///sqlite.db' 

admin_db.init_app(app)
migrate = Migrate(app, admin_db)

app.register_blueprint(routes_bp , url_prefix="/")
app.register_blueprint(admin_bp , url_prefix="/api/admin/")


if __name__ == '__main__':
    app.run(debug=True)