from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import Datetime
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///your_database.db' 
db = SQLAlchemy(app)



# blog-post ka model 
 # - Title
 # - Thumbnail
 # - Image 1 (optional)
 # - Image 2 (optional)
 # - Description
 # - Created on
 # - is_public (boolean feild)

# members ka model
 # - Name
 # - Image
 # - position
 # - order 
 # - is_public
 # - is_active
 # - date_joined
 # - date_left_on
class Member(db.model):
    id=db.Column(db.Integer,primary_key=True)
    name=db.column(db.String(100),nullable=False)
    image=db.column(db.String(255),nullable=False)
    position=db.column(db.String(100),nullable=False)
    order=db.column(db.Integer,nullable=False)
    is_public=db.column(db.Boolean,default=False)
    is_active=db.column(db.Boolean,default=False)
    date_joined=db.column(db.Datetime,default=Datetime.utcnow)
    date_left_on=db.column(db.Datetime,default=Datetime.utcnow)

if __name__=='__main__':
    db.create_all()
    app.run(debug=True,port=8000)
    
 # Model name BlogPost,Member