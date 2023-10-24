import Movie from "./Movie"


const Movies = ({movies}) => {
  return (
    <>
      {movies.map((movie, index) => (
        <Movie key={index}
               movie_title={movie.title}
               movie_rating={movie.rating}   />
    ))}
    </>
  )
}

export default Movies
