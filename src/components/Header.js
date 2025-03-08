import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { netflixLogo } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const GptHandleClick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute w-full px-4 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between items-center">
      {/* Netflix Logo */}
      <img
        className="w-32 md:w-52 h-auto" 
        src={netflixLogo}
        alt="logo"
      />

      {/* Buttons and Avatar */}
      {user && (
        <div className="flex items-center space-x-2 md:space-x-4 mt-2 md:mt-0">
          <button
            onClick={GptHandleClick}
            className="py-1 px-2 md:py-2 md:px-4 text-sm md:text-base font-bold bg-slate-700 text-white whitespace-nowrap rounded-md"
          >
            {showGptSearch ? "Home" : "Search"}
          </button>
          <button
            onClick={handleSignOut}
            className="py-1 px-2 md:py-2 md:px-4 text-sm md:text-base font-bold text-white bg-red-800 whitespace-nowrap rounded-md"
          >
            Sign Out
          </button>
          <img
            className="w-8 h-8 md:w-12 md:h-12 rounded-full"
            src={user?.photoURL}
            alt="avatar"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
