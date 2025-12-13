import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { checkValidation } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
const SignIn = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const emailRef = useRef(null);
  const [nameMessage, setNameMessage] = useState(null);
  const nameRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const passwordRef = useRef(null);
  const navigate = useNavigate()
  const toggleFormHandler = () => {
    setIsSignInForm(!isSignInForm); //toggle between signin and sign up form
  };
  // form validation
  const formValidation = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = isSignInForm ? null : nameRef.current?.value?.trim();
    const message = checkValidation(email, password);
    setErrorMessage(message);
    if (!isSignInForm && !name) {
      setNameMessage("Full name is required.");
      setErrorMessage("");
      return;
    } else if (!isSignInForm && name) {
      //sign up logic
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up successfully
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    } else if (isSignInForm) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Sign in successfully
          const user = userCredential.user;
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw"
          alt="background"
        />
      </div>
      <form
        onSubmit={formValidation}
        className="w-3/12 absolute bg-opacity-80 p-12 bg-black text-white mt-32 mx-auto left-0 right-0 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            ref={nameRef}
            placeholder="Full Name"
            className="p-2 m-2 bg-gray-200 text-black"
          />
        )}
        <p className="text-red-800 font-bold ml-2">{nameMessage}</p>
        <input
          type="text"
          placeholder="Email Address"
          ref={emailRef}
          className="p-2 m-2 bg-gray-200 text-black"
        />
        <input
          type="password"
          ref={passwordRef}
          placeholder="password"
          className="p-2 m-2 bg-gray-200 text-black"
        />
        <p className="ml-2 text-red-900 font-bold">{errorMessage}</p>
        <button type="submit" className="ml-2 p-2 bg-blue-700 rounded w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 ml-2 cursor-pointer" onClick={toggleFormHandler}>
          {isSignInForm
            ? "New to Netflix? Sign Up for free"
            : "Already a user? Sign In"}
        </p>
      </form>
    </>
  );
};

export default SignIn;
