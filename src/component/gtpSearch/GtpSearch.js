import React from 'react'
import GtpSearchBar from './GtpSearchBar'
import { BG_URL } from '../../utilis/constants'
import GtpMovieSuggestions from './GtpMovieSuggestions'

const GtpSearch = () => (
  <>
    <div className='bg-img fixed -z-20 '>
      <img
        className='object-cover h-screen md:h-auto'
        src={BG_URL}
        alt="background"
      />
    </div>

    <div className='gtp-search'>
      <GtpSearchBar />
      <GtpMovieSuggestions />
    </div>
  </>
)

export default GtpSearch
