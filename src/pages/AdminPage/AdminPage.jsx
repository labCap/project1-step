import React from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import "./AdminPage.scss";

export const AdminPage = () => {
  return (
    <div className="admin-page">
      <div className="admin-page__inner">
        <div className="admin-page__header">
          <div className="user-name">Danya</div>
          <Button func={() => null}>Log Out</Button>
        </div>
        <form className="admin-page__body">
          <Input type={"text"} placeholder={"article title"} />
          <textarea placeholder="article..."></textarea>
          <Button func={() => null} className={"add-btn"}>
            Add
          </Button>
        </form>
      </div>
    </div>
  );
};
