import React, {useState} from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { logo } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch()
const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  const user = useSelector((store) => store.user);

  const showGptSearchHandler= () => {
    dispatch(toggleGptSearchView())
  }

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full absolute z-50 flex justify-between items-center px-8  top-0 bg-gradient-to-b from-black">
      <img src={logo} alt="logo" className="w-48" />

      {user && (
        <div className="flex items-center gap-6">
          <button className="py-2 px-8 bg-purple-400 text-white rounded-md" onClick={showGptSearchHandler}>{ showGptSearch ? "Home Page" : "Gpt Search"}</button>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
            className="w-10 rounded-lg"
          />
          <button
            onClick={handleSignOut}
            className="text-white font-semibold hover:underline"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
