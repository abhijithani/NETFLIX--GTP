import { useSelector } from 'react-redux'
import MovieList from '../browse/MovieList';

const GtpMovieSuggestions = () => {

  const { movieResults, movieNames } = useSelector((store) => store.gtp)
  if (!movieNames) return null;
  return (
    <div className='p-4 m-3 bg-black bg-opacity-80 text-white '>
      <div>
        {movieNames.map((movieNames, index) => (
          <MovieList
            key={movieNames}
            title={movieNames}
            movies={movieResults[index]} />
        ))}
      </div>
    </div>
  )
}

export default GtpMovieSuggestions
