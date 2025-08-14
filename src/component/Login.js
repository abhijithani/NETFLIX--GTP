import { useRef } from 'react'
import Header from './Header/Header'
import { useState } from 'react';
import { checkvalidation } from '../utilis/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utilis/firebase';
import { BG_URL, profileicon } from '../utilis/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utilis/userslice';

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setSignInForm] = useState(true);
  const [Errormessage, setErrormessage] = useState(null);

  const toggleSignInForms = () => {
    setSignInForm(!isSignInForm)
  }

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  // console.log(email);

  const handleButtonClick = () => {
    const emailVal = email.current?.value.trim();


    const message = checkvalidation(emailVal, password.current.value);
    setErrormessage(message);
    // console.log(message);

    if (message) return;

    //sign in /sign up logic
    if (!isSignInForm) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        emailVal,
        password.current.value)

        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: profileicon,

          })
          .then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            )
          }).catch((error) => {
            setErrormessage(error.message)
          });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + "-" + errorMessage)
        });
    }
    else {
      signInWithEmailAndPassword(
        auth,
        emailVal,
        password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + "-" + errorMessage)
        });
    }
  }

  return (
    <div className='login '>
      <Header />
      <div className='bg-img absolute'>
        <img
          className='object-cover h-screen md:h-auto'
          src={BG_URL}  
          alt="background"
        />
      </div>


      <div className='sign-box'>

        <form onSubmit={(e) => e.preventDefault()}
          className='form-box w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
          <h1 className='sign-heading font-bold text-3xl py-4'>
            {isSignInForm ? "Sign in" : "Sign up"}
          </h1>

          {!isSignInForm && <input ref={name} type='text' placeholder='Name' className='p-4 my-4 w-full bg-gray-700' />}

          <input ref={email}
            type='text'
            placeholder='Email address'
            className='p-4 my-4 w-full bg-gray-700' />


          <input ref={password}
            type='password'
            placeholder='Password'
            className='p-4 my-4 w-full bg-gray-700' />

          <button className='sign-btn p-4 my-6 bg-red-700 w-full rounded-lg'
            onClick={handleButtonClick}>
            {isSignInForm ? "Sign in" : "Sign up"}
          </button>

          <p className='text-red-500 font-bold text-lg py-2'>{Errormessage}</p>

          <p className='py-4 cursor-pointer'
            onClick={toggleSignInForms}
          >{isSignInForm ? "New to Netflix?Signup now" : "Already Sign up?.Sign in"}</p>
        </form>

      </div>
    </div>
  )
}

export default Login
