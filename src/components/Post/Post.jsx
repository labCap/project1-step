import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Post.scss";

export const Post = ({ title, description }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__user-img user-img">
          <img
            src={currentUser.photoURL}
            alt={`userAvatar ${currentUser.displayName}`}
          />
        </div>
        <div className="post__user-name">{currentUser.displayName}</div>
      </div>
      <h2 className="post__title">{title}</h2>
      <p className="post__description">{description}</p>
    </div>
  );
};
