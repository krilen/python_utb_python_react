import {useState} from "react";


const MovieAdd = ({onAdd}) => {

  // Hooks to be able to add a new movie
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("1");

  // Created a local func just to be able to reset the form if adding was ok
  const addMovieLocal = (movie) => {
    const ok = onAdd(movie);

    // Default values if adding the movies went well
    if (ok) {
      setRating("1")
      setTitle("")
    }
  }

  return (
    <div>
      <p>
        <input type="text" placeholder="Movie title..." value={title}
          onChange={e => setTitle(e.target.value)}></input>
      </p>
      <p>
      <select value={rating} onChange={e => setRating(e.target.value)}>
        <option value="1">1 star</option>
        <option value="2">2 stars</option>
        <option value="3">3 stars</option>
        <option value="4">4 stars</option>
        <option value="5">5 stars</option>
      </select>
      </p>
      <p>
        <button type="button" onClick={() => addMovieLocal({title, rating})}>Add Movie</button>
      </p>
    </div>
  )
}

export default MovieAdd
