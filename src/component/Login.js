import { useRef } from 'react'
import Header from './Header/Header'
import { useState } from 'react';
import { checkvalidation } from '../utilis/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utilis/firebase';
import { useNavigate } from 'react-router-dom';
import { profileicon } from '../utilis/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utilis/userslice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSignInForm, setSignInForm] = useState(true);
  const [Errormessage, setErrormessage] = useState(null);

  const toggleSignInForms = () => {
    setSignInForm(!isSignInForm)
  }

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  console.log(email);

  const handleButtonClick = () => {
    const emailVal = email.current?.value.trim();


    const message = checkvalidation(emailVal, password.current.value);
    setErrormessage(message);
    console.log(message);

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
          navigate("/browse");

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
      <div className='bg-img'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg'
          alt="background"
        />
      </div>


      <div className='sign-box'>

        <form onSubmit={(e) => e.preventDefault()}
          className='form-box'>
          <h1 className='sign-heading'>
            {isSignInForm ? "Sign in" : "Sign up"}
          </h1>

          {!isSignInForm && <input ref={name} type='text' placeholder='Name' className='input' />}

          <input ref={email}
            type='text'
            placeholder='Email address'
            className='input' />


          <input ref={password}
            type='password'
            placeholder='Password'
            className='input' />

          <button className='sign-btn'
            onClick={handleButtonClick}>
            {isSignInForm ? "Sign in" : "Sign up"}
          </button>

          <p className='errormessage'>{Errormessage}</p>

          <p className='singIn-switch'
            onClick={toggleSignInForms}
          >{isSignInForm ? "New to Netflix?Signup now" : "Already Sign up?.Sign in"}</p>
        </form>

      </div>
    </div>
  )
}

export default Login
