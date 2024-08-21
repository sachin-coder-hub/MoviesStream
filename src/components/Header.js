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
    return () => unsubscribe(); // This unsubscribes the onAuthStateChanged function when component unmounts
  }, []);

  const GptHandleClick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44 " src={netflixLogo} alt="logo" />
      {user && (
        <div className="flex p-2">
          <button
            onClick={GptHandleClick}
            className="py-2 px-4 m-2 font-bold bg-slate-700 text-white whitespace-nowrap rounded-md"
          >
            {showGptSearch ? "Home" : "Search"}
          </button>
          <button
            onClick={handleSignOut}
            className="p-2 m-2 font-bold text-white bg-red-800 whitespace-nowrap rounded-md"
          >
            Sign Out
          </button>
          <img
            className="w-12 h-12 m-2 rounded-3xl"
            src={user?.photoURL}
            alt="avatar"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
