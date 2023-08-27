import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="absolute px-8 py-5 bg-gradient-to-b from-black z-10">
      <Link to="/">
        <img src="images/Netflix_Logo.png" alt="logo" className="w-44 h-24" />
      </Link>
    </div>
  );
}

export default Header;
