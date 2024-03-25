from flask_login import UserMixin
from werkzeug security import generate_password_hash,check_password_hash

class User(UserMixin):

  def __init__(self, id, username, email, password):
    self.id=id
    self.username=username
    self.email=email
    self.password_hash=generate_password_hash(password)
