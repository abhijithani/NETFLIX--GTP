import React from 'react'
import { IMG_URL } from '../../utilis/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='poster-div'>
      <img alt='moive-img'
      className='poster-img'
      src={IMG_URL + posterPath}
      />
    </div>
  )
}

export default MovieCard
