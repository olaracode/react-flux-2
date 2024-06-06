import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
export const Home = () => {
  const { store } = useContext(Context);
  return (
    <div className="container mx-auto">
      <Link to="/post" className="w-100 btn btn-primary">
        Crear post
      </Link>

      {store.posts.map((post) => {
        return (
          <div className="card" key={post.id}>
            <div className="card-body">{post.title}</div>
          </div>
        );
      })}
    </div>
  );
};
