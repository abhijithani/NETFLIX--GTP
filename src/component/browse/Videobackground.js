import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const Videobackground = ({ movieId }) => {

  const trailerVideo = useSelector(store => store.movies?.addTrailerVideo)

  useMovieTrailer(movieId)

  return (
    <div className='videobg-div'>
      <iframe
  width="560"
  height="315"
  className="video-bg"
  src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}`}
  title="YouTube video player"
  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
></iframe>

    </div>
  )
}

export default Videobackground;
