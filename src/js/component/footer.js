import React, { useContext } from "react";
import { Context } from "../store/appContext";
// Return implicito
export const Footer = () => {
  const { store } = useContext(Context);
  return (
    <footer className="footer mt-auto py-3 text-center">
      <p>Posts: {store.posts.length}</p>
    </footer>
  );
};
