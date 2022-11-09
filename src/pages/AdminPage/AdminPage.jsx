import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Button } from "../../components/Button/Button";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
import "./AdminPage.scss";

export const AdminPage = () => {
  const { currentUser } = useContext(AuthContext);

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
        <form className="admin-page__body">
          <input type="text" placeholder="article title" />
          <textarea placeholder="article..."></textarea>
          <Button className={"add-btn"}>Add</Button>
        </form>
      </div>
    </div>
  );
};
