from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app():
    """
    Create the Flask app that is required and the database if it does not exists
    """
    app = Flask(__name__)

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///movie_db.sqlite'

    ## Init the database
    db.init_app(app)

    # Import the databse model
    from . import models

    # If database does not exits it will be created
    with app.app_context():
        db.create_all()

    # Import the flask routes
    from .routes import main
    app.register_blueprint(main)

    return app


