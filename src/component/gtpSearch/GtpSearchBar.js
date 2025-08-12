import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../../utilis/languagesConstants'

const GtpSearchBar = () => {

  const langKey  = useSelector((store) => store.config.lang);

  return (
    <div className='pt-[7%] flex justify-center'>
      <form className='p-2 w-1/2 bg-slate-800 grid grid-cols-12'>
        <input type='text' className='p-3 m-2 col-span-9'  placeholder={lang[langKey].gtpSearchPlaceholder}/>
        <button className='p-2  m-4 bg-red-600 col-span-3 text-white rounded-lg'>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GtpSearchBar
