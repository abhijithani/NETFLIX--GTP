import React, { useEffect } from 'react'
import { auth } from '../../utilis/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../../utilis/userslice'
import { netflixlogo, SUPPORTED_LAN } from '../../utilis/constants'
import { toggleGtpstate } from '../../utilis/gtpSlice'
import { changeLanguage } from '../../utilis/configSlice'

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showGtpSearch = useSelector((store) => store.gtp.showGtpSearch)

  const handleClick = () => {
    dispatch(toggleGtpstate());
  }

  const user = useSelector(store => store.user)
  const handleSignout = () => {
    signOut(auth).then(() => {
      

    }).catch((error) => {
      // An error happened.
    });
  }

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                // console.log(user);
                // console.log("Dispatching user to Redux:", { uid, email, displayName });
                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL : photoURL}))
                navigate("/browse")
            } 
            else {
                dispatch(removeUser());
                navigate("/")
                 }
        });

        //Unsubscribe when component unmounts
        return () => unsubscribe();
    }, []);
    
    const handleLangChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

  return (
    <div className='header absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
      <div>
        <img
          className='logo-img w-44 mx-auto md:mx-0 '
          src={netflixlogo}
          alt='logo'
        />
      </div>
      
      {user && (
        <div className='flex gap-1 items-center justify-between'>
          {showGtpSearch && (<select className='p-1 bg-slate-500 text-white'  onChange={handleLangChange}>
            {SUPPORTED_LAN.map((lang) => (
            <option key={lang.identifier}  value={lang.identifier}>
              {lang.name}</option>
            
            ))}
          </select>)}

          <button className='gtp-btn m-1 bg-blue-400 p-1 rounded-sm'
          onClick={handleClick}>
            GPT Search
          </button>

          <img
            className='hidden md:inline-block  w-12 h-12 m-1'
            src={user?.photoURL}
          />
          <button
            className='font-bold text-white bg-red-600 p-1 rounded-md '
            onClick={handleSignout}
          > Logout</button>
        </div>
      )}


    </div>
  )
}

export default Header
