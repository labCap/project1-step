import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Button } from "../../components/Button/Button";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
import { Posts } from "../../components/Posts/Posts";

import "./AdminPage.scss";
import { Link } from "react-router-dom";

export const AdminPage = () => {
  const { currentUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="admin-page">
      <div className="admin-page__inner">
        <div className="admin-page__header">
          <div className="user-img">
            <img
              src={currentUser.photoURL}
              alt={`userAvatar ${currentUser.displayName}`}
            />
          </div>
          <div className="user-name">{currentUser.displayName}</div>
          <div className="admin-page__btn-box">
            <Link to={"/posts"}>Posts</Link>
            <Button func={() => signOut(auth)}>Log Out</Button>
          </div>
        </div>
        <form className="admin-page__body" onSubmit={handleSubmit}>
          <input
            className="admin-page__input"
            type="text"
            placeholder="article title"
          />
          <textarea
            className="admin-page__textarea"
            placeholder="article..."
          ></textarea>
          <Button className={"add-btn"} func={() => null}>
            Add
          </Button>
        </form>
        <Posts />
      </div>
    </div>
  );
};
