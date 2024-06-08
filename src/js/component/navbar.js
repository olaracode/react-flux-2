import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  // deestructuracion el objeto { store, actions }
  const { store } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <h1>Blog</h1>
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          Posts({store.posts.length})
        </span>
      </Link>
    </nav>
  );
};
