import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Button } from "../../components/Button/Button";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
import "./AdminPage.scss";

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
          <Button func={() => signOut(auth)}>Log Out</Button>
        </div>
        <form className="admin-page__body" onSubmit={handleSubmit}>
          <input type="text" placeholder="article title" />
          <textarea placeholder="article..."></textarea>
          <Button className={"add-btn"} func={() => null}>
            Add
          </Button>
        </form>
      </div>
    </div>
  );
};
