import React from 'react'
import GtpSearchBar from './GtpSearchBar'
import { BG_URL } from '../../utilis/constants'
import GtpMovieSuggestions from './GtpMovieSuggestions'

const GtpSearch = () => (
  <div className='gtp-search'>
    <div className='bg-img fixed -z-20'>
        <img
          className='object-cover'
          src={BG_URL}  
          alt="background"
        />
      </div>
    <GtpSearchBar />
    <GtpMovieSuggestions/>
  </div>
)

export default GtpSearch
