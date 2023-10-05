
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blog.db' 

db = SQLAlchemy(app)

class BlogPost(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    thumbnail = db.Column(db.String(255), nullable=False)
    image1 = db.Column(db.String(255))
    image2 = db.Column(db.String(255))
    description = db.Column(db.Text, nullable=False)
    created_on = db.Column(db.DateTime, default=datetime.utcnow)
    is_public = db.Column(db.Boolean, default=True)

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
    date_joined=db.column(db.Datetime,default=datetime.utcnow)
    date_left_on=db.column(db.Datetime,default=datetime.utcnow)


    
 # Model name BlogPost,Member


 # Model name BlogPost,Member

