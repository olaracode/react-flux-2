import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import EditModal from "../component/EditModal.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container mx-auto">
      <Link to="/post" className="w-100 btn btn-primary">
        Crear post
      </Link>

      {store.posts.map((post) => {
        return (
          <div className="card" key={post.id}>
            <div className="card-body">{post.title}</div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={() => actions.deletePost(post.id)}
              >
                Borrar
              </button>
              <EditModal post={post} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
