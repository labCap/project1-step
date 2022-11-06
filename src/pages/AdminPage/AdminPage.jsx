import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import "./AdminPage.scss";

export const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-page">
      <div className="admin-page__inner">
        <div className="admin-page__header">
          <div className="user-name">Danya</div>
          <Button func={() => navigate("/log-in")}>Log Out</Button>
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
