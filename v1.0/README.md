# Movies Pyton and React v1

## Python Back-end

"python_api"

### Using Flask to create the API

A simple API with 2 routes

- List the movies in the db ".../movies" using a GET method
- Add a movie to the db ".../add_movie" using a POST method with the JSON body
  '{"title": "<insert_movie_title>", "rating": <insert_movie_rating>}'
  ex: '{"title": "Avengers", "rating": 4}'

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

---

## React Front-end

"react_web"

### Using Vite (v4.4.11) to create the React boilerplate

The Youtube video uses CRA but at this current date (2023 oct) CRA is seen as deprecated and Vite is the recommended way to go.
Vite boilderplate also saves over 200MB of diskspace.
Will skip the "semantic" stuff the main interested is on how to get the connection between the front-end (React)
and back-end (Python).

Steps

- Create your own React base using Vite or download the content and install the packages for node.js from package.json
- Make sure that the back-end is running (python_api)
- Start React with 'npm run dev'
- React is connecting to the backend using "http://localhost:5000" (static variable in App.jsx)
- With a browser connect to React (usually "http://localhost:5173/")
  A VERY simple page with a input text, select and a buttton will appear
  When adding a movie is should show up under the "Add Movie" button, check Console for any errors

All of the intelligence are in the App.jsx file and then pushed out to the different components.
Sometimes this is a bad idea like clearing the input text and select but you can fix this also
with an additional step.
