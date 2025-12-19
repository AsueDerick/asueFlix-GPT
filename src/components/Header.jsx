import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { logo } from "../utils/constants";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user); // 
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });

    return () => unsubscribe();
  },[navigate, dispatch]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="absolute z-10 py-2 px-8">
        <img
          src={logo}
          alt="logo"
          className="w-48"
        />
      </div>

      {/* ⬅️ ONLY show when user is signed in */}
      {user && (
        <div className="flex gap-10 absolute z-10 font-bold right-10">
          <img
            alt="user icon"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            className="w-12 rounded-2xl"
          />
          <button
            onClick={handleSignOut}
            className="text-white" 
          >
            Sign Out
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
