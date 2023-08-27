import { Link } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";

function Login() {
  const [isSignInForm, setisSignInForm] = useState(true);

  function toggleSignInForm() {
    setisSignInForm(!isSignInForm);
  }
  function handleLogin(e) {
    e.preventDefault();
  }

  useEffect(() => {
    document.title = "Netflix-Clone";
  }, []);

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>

      <form
        className="absolute w-[450px] bg-black mx-auto items-center p-16 my-40 right-0 left-0 bg-opacity-80"
        onSubmit={handleLogin}
      >
        <h1 className="text-3xl font-bold text-white mb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-2 mt-5 w-full rounded-md h-12 bg-gray-600"
          />
        )}

        <input
          type="text"
          placeholder="Email or phone number"
          className="px-4 py-2 mt-5 w-full rounded-md h-12 bg-gray-600"
        />
        <input
          type="text"
          placeholder="Password"
          className="px-4 py-2 mt-5 w-full rounded-md h-12 bg-gray-600"
        />
        <button className="p-2 mt-10 text-white bg-red-700 w-full rounded-md h-12">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="flex justify-between items-center mt-4 text-gray-300">
          {isSignInForm && (
            <div>
              <input type="checkbox" />
              <label className=" px-1">Rememeber me</label>
            </div>
          )}
          <Link className="hover:underline">Need help?</Link>
        </div>

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
