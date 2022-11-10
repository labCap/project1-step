import React from "react";
import { Link } from "react-router-dom";
import { Posts } from "../../components/Posts/Posts";

import "./PostsPage.scss";

export const PostsPage = () => {
  return (
    <div className="posts-page">
      <div className="posts-page__inner">
        <div className="posts-page__header">
          <Link to={"/"}>Home</Link>
          <h2 className="title">Posts</h2>
        </div>
        <Posts />
      </div>
    </div>
  );
};
