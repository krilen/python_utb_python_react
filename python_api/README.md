## Python Back-end

---

### Using Flask to create the API

A simple API with 2 routes

- List the movies in the db ".../movies" using a GET method
- Add a movie to the db ".../add_movie" using a POST method with the JSON body
  '{"title": "<insert_movie_title>", "rating": <insert_movie_rating>}'
  ex: {"title": "Avengers", "rating": 4}

---

Steps

- Create a venv for the python api
- Install 'flask' (web) and 'flask-sqlalchemy' (db)
- Add all of the relavent content from this repo
- USe 'python run.py' to start the Flask application
  The first time the database is created
