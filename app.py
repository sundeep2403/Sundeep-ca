from flask import Flask, render_template, redirect, url_for
from flask_login import LoginManager, login_user, logout_user, current_user, login_required
from models import User

users = {
    "admin": User(1, "admin", "admin@example.com", "password")
}

from forms import LoginForm
def login():
    form=LoginForm()
    if form.validate_on_submit():
        user = users.get(form.username.data)
