import { Link } from "react-router-dom";
import Header from "./Header";
import { useEffect, useRef, useState } from "react";
import { HOMEPAGE_BG_IMAGE } from "../utils/constant";
import { checkValidData } from "../utils/validate";

function Login() {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  function toggleSignInForm() {
    setisSignInForm(!isSignInForm);
  }

  function handleLogin(e) {
    e.preventDefault();

    const message = isSignInForm
      ? checkValidData(null, email.current.value, password.current.value)
      : checkValidData(
          fullName.current.value,
          email.current.value,
          password.current.value
        );
    setErrorMessage(message);
  }

  useEffect(() => {
    document.title = "Netflix-Clone";
  }, []);

  return (
    <div>
      <Header />
      <div className="md:absolute">
        <img src={HOMEPAGE_BG_IMAGE} alt="logo" />
      </div>

      <form
        className="absolute w-[450px] bg-black mx-auto items-center p-16 md:my-40 right-0 left-0 bg-opacity-80"
        onSubmit={handleLogin}
      >
        <h1 className="text-3xl font-bold text-white mb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="px-4 py-2 mt-5 w-full rounded-md h-12 bg-gray-600 text-white"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="px-4 py-2 mt-5 w-full rounded-md h-12 bg-gray-600 text-white"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="px-4 py-2 mt-5 w-full rounded-md h-12 bg-gray-600 text-white"
        />
        <p className="pt-2">{errorMessage}</p>
        <button className="p-2 mt-10 text-white bg-red-700 w-full rounded-md h-12">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm && (
          <div className="flex justify-between items-center mt-4 text-gray-300">
            <div>
              <input type="checkbox" />
              <label className=" px-1">Rememeber me</label>
            </div>
            <Link className="hover:underline">Need help?</Link>
          </div>
        )}

        <div className="text-gray-400 pt-14">
          <p>
            {isSignInForm ? "New to Netflix?" : "Already Registered?"}
            <span
              className="px-1 hover:underline text-white cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign up now." : "Sign In Now."}
            </span>
          </p>
        </div>
        <p className="text-gray-400 pt-5 pb-20">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </form>
    </div>
  );
}

export default Login;
