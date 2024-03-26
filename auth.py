from flask import render_template, redirect, url_for
from flask_login import login_user, logout_user, current_user, login_required
from models import User
from forms import LoginForm

users = {
    "admin": User(1, "admin", "admin@example.com", "password")
}

def login():
    form = LoginForm()
    if form.validate_on_submit():
