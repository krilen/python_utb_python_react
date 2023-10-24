
// A component for one movie, style is awful :)
const Movie = ({movie_title, movie_rating}) => {
  return (
    <div>
      {`"${movie_title}" has the rating of ${movie_rating}/5`}
    </div>
  )
}

export default Movie
