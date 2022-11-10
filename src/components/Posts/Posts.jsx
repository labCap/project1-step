import React from "react";
import { Post } from "../Post/Post";
import "./Posts.scss";

export const Posts = () => {
  return (
    <div className="posts">
      <Post
        title={"hi"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At vel quo ab sunt suscipit placeat commodi eligendi, dolor sint natus sit omnis fuga sapiente, tenetur aspernatur fugiat doloremque repellendus consequatur."
        }
      />
    </div>
  );
};
