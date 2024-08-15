import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleClickButton = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMsg(message);

    if (message) return;

    if (!isSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL:
              "https://lh3.googleusercontent.com/a/ACg8ocI4AZw86gLImPXzphHojIiZv5n55tL3UqJXU8aYedo0_MFIcA=s360-c-no",
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
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + errorMessage);
        });
    } else {
      // sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg"
          alt="Bg-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 w-3/12 my-36 bg-black mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75"
      >
        <h1 className="font-bold text-3xl py-4 m-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-2 my-3 w-full rounded-sm bg-gray-700"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-3 w-full rounded-sm bg-gray-700"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-3 w-full rounded-sm bg-gray-700"
        ></input>
        <p className="text-red-600 font-bold">{errorMsg}</p>
        <button
          className="p-2 my-4 bg-red-700 w-full rounded-sm"
          onClick={handleClickButton}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <h2 className="cursor-pointer p-4" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now."
            : "Already a user? Sign In Now."}
        </h2>
      </form>
    </div>
  );
};

export default Login;
