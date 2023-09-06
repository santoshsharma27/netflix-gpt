import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  function handleSignOut(e) {
    e.preventDefault();

    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  }

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
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  function handleGPTSearch() {
    dispatch(toggleGptSearchView());
  }

  function handleLanguage(e) {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="z-10 flex w-full justify-between bg-gradient-to-b from-black px-8 md:absolute">
      <Link to="">
        <img src="images/Netflix_Logo.png" alt="logo" className="w-44" />
      </Link>
      {user && (
        <div className="flex items-center justify-center">
          {showGptSearch && (
            <select
              className="mx-2 rounded-md px-5 py-2"
              onChange={handleLanguage}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option value={lang.identifier} key={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="mx-5 rounded-lg bg-purple-800 px-4 py-2 text-xs text-white md:text-base"
            onClick={handleGPTSearch}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="hidden h-8 w-8 rounded-md md:block"
            alt="user_icon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="px-2 font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
