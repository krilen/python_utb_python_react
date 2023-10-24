import Movies from "./components/Movies";
import MovieAdd from "./components/MovieAdd";

import { useEffect, useState } from "react";

// API back-end URL (python)
const apiUrl = "http://localhost:5000"

function App() {

  const [movies, setMovies] = useState([]);

  // API call to the backend, will only be called the first time when page is loaded
  // all off the other times the hook 'useState' "setMovies"  above will be used to list the movies.
  // By default we always include a empty array, "[]", at the end.
  // To set the useEffect state. Using async and await inside the useEffect.
  useEffect(() => {
    
    // Get the movies and put it in the state if there are any
    const getMovies = async () => {
      // Get the movies
      const moviesFromServer = await fetchMovies();
      // Add movies into the 'useState' "setMovies" 
      setMovies(moviesFromServer);
    }

    // Call to see if ther are any movies in the backend
    getMovies();
  }, [])

  
  // Get the movies from the backend
  const fetchMovies = async () => {
    // The REQUEST to the API
    const res = await fetch(`${apiUrl}/movies`) 
    // The RESPONSE from the API
    const data = await res.json()

    // Making sure that the array is return and not the object
    return data["movies"]
  }


  // Add a movie to the backend
  const addMovie = async (movie) => {
    const res = await fetch(`${apiUrl}/add_movie`, { 
                              method: "POST",
                              headers: {"Content-type": "application/json"},
                              body: JSON.stringify(movie),
    })

    // If adding went well we add the new movie to the current movies
    // and retrun true so the fields for adding a new movie will be cleared.
    if (res.ok) {
      setMovies([...movies, movie])
      return true
    }

    // If adding did not go well the new movie will not be added to the current movies
    // and return false so the fields for adding a new movie will NOT be cleared.
    return false
  }

  
  return (
    <div>
      <MovieAdd onAdd={addMovie}/>
      <br />
      <Movies movies={movies} />
    </div>
  )
}

export default App
