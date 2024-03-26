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
        if user and user.verify_password(form.password.data):
            login_user(user)
            return redirect(url_for('index'))
        else:
            pass
    return render_template('login.html',form=form)

@loginrequired
def logout():
    logout_user()
    return redirect(url_for('login'))

if __name__ == '__main__':
    app = Flask(__name__)

    app.config['SECRET_KEY'] = 'your_secret_key'
