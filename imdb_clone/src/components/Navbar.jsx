import React from "react";
import Logo from "../assets/icon.svg";
import {Link} from 'react-router-dom'

const navbar = () => {
  return (
    <div className="flex space-x-6 place-items-center p-3 nav-bck">
      <img className="w-6" src={Logo} alt=""></img>
      <Link to="/" className="text-sky-600 font-bold font-serif">
        Movies
      </Link>
      <Link to="/watchlist" className="text-sky-600 font-bold font-serif">
        Watch List
      </Link>
    </div>
  );
};

export default navbar;
