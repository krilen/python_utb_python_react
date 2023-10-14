## Python Back-end

---

### Using Flask to create the API

A simple API with 2 routes

- List the movies in the db ".../movies" using a GET method
- Add a movie to the db ".../add_movie" using a POST method with the JSON body
  '{"title": "<insert_movie_title>", "rating": <insert_movie_rating>}'
  ex: '{"title": "Avengers", "rating": 4}'

---

Steps

- Create a venv for the python api
- Add/Copy all of the relavent content from this repo into the venv.
- Use requirement.txt to install the requirements and their dependencies, 'pip install -r requirement.txt'
  - 'flask' (web)
  - 'flask-sqlalchemy' (db)
  - 'flask-cors' (Cross Origin Resource Sharing)
    CORS was something that was new to this project, see https://flask-cors.readthedocs.io/en/latest/
    without it I was not able to fetch data from the python backend
- Use 'python run.py' to start the Flask application
  The first time the database is created
