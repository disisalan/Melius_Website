from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class BlogPost(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    thumbnail = db.Column(db.String(255), nullable=False)
    image1 = db.Column(db.String(255))
    image2 = db.Column(db.String(255))
    description = db.Column(db.Text, nullable=False)
    created_on = db.Column(db.DateTime, default=datetime.utcnow)
    is_public = db.Column(db.Boolean, default=False)

class Member(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String(100),nullable=False)
    image=db.Column(db.String(255),default="default.jpg")
    position=db.Column(db.String(100),nullable=False)
    order=db.Column(db.Integer,nullable=False)
    is_public=db.Column(db.Boolean,default=False)
    is_active=db.Column(db.Boolean,default=False)
    is_core = db.Column(db.Boolean,default=False)


class ContactUs(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255),nullable=False)
    description = db.Column(db.Text, nullable=False)
    created_on = db.Column(db.DateTime, default=datetime.utcnow)

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    partner = db.Column(db.String(255))
    brief = db.Column(db.Text)
    pdf_link = db.Column(db.String(255),nullable=False)
    date = db.Column(db.Date,)
    photo = db.Column(db.String(255))
    instagram_link = db.Column(db.String(255))
    linkedin_link = db.Column(db.String(255))
    is_public = db.Column(db.Boolean, default=False)