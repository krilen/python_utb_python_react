## Python Back-end

---

### Using Flask to create the API

A simple API with 2 routes

- List the movies in the db ".../movies" using a GET mothod
- Add a movie to the db ".../add_movie" using a POST method with the JSON body
  '{"title": "<insert_move_title>", "rating": <insert_rating>}'
  ex: {"title": "Avengers", "rating": 4}

---

Steps

- Create a venv for the python api
- Install 'flask' (web) and 'flask-sqlalchemy' (db)
- Add all of the relavent content from this repo
- Run 'python run.py'
  The first time the database should be created
