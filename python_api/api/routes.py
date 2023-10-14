from flask import Blueprint, jsonify, request
from . import db
from .models import Movies

main = Blueprint("main", __name__)

@main.route("/add_movie", methods=["POST"])
def add_movie() -> (str, int):
    """
    A POST request to '/add_movie' (with data) to add a movie into the database
    """
    # The movie request in JSON format
    movie_data = request.get_json()

    # Create a new movie 
    new_movie = Movies(title=movie_data['title'], rating=movie_data['rating'])

    # Add the movie to the database using SQLAlchemy
    db.session.add(new_movie)
    db.session.commit()

    return "Done", 201


@main.route("/movies", methods=["GET"])
def movies() -> dict[str, str]:
    """
    A GET request to '/movies' to list all movies in the database
    """
    # Empty movies list to begin with
    movies = []

    # Query the database using SQLAlchemy, it allows us to query the class directly
    movie_list = Movies.query.all()

    # From the database query add each movie as a dictonary to the movie list
    for movie in movie_list:
        movies.append({"title" : movie.title, "rating" : movie.rating})

    # Retrun the list in json format
    return jsonify({"movies": movies})