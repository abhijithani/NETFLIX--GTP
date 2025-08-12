import React from 'react'
import GtpSearchBar from './GtpSearchBar'
import { BG_URL } from '../../utilis/constants'
const GtpSearch = () => (
  <div className='gtp-search'>
    <div className='bg-img absolute -z-10'>
        <img
          className='object-cover'
          src={BG_URL}  
          alt="background"
        />
      </div>
    <GtpSearchBar />
  </div>
)

export default GtpSearch
