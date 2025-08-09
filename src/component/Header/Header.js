import React, { useEffect } from 'react'
import "./header.module.css"
import { auth } from '../../utilis/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../../utilis/userslice'
import { netflixlogo } from '../../utilis/constants'
import { profileicon } from '../../utilis/constants'


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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


  return (
    <div className='header'>
      <div>
        <img
          className='logo-img'
          src={netflixlogo}
          alt='logo'
        />
      </div>
      
      {user && (
        <div className='profile-section'>
          <img
            className='profile-icon'
            src={user?.photoURL}
          />
          <button
            className='logout-btn'
            onClick={handleSignout}
          > Logout</button>
        </div>
      )}


    </div>
  )
}

export default Header
