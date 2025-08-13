
import { IMG_URL } from '../../utilis/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='className="w-36 md:w-48 pr-4'>
      <img alt='moive-img'
      src={IMG_URL + posterPath}
      />
    </div>
  )
}

export default MovieCard
