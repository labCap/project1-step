import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../../firebase.js";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "../../components/Button/Button";
import "./SignIn.scss";

export const SignIn = () => {
  // let [inputErr, setInputErr] = useState(false);
  let [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            navigate("/");
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="sign-in">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Registration</h2>

        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <label htmlFor="file">
          <span className="plus"></span>
          <span>{"Add photo (no .svg)"}</span>
        </label>
        <input
          type="file"
          placeholder="file"
          id="file"
          style={{ display: "none" }}
        />
        {err && <span className="error">Error</span>}
        <Button func={() => null}>Sign In</Button>
        <span>
          Do you have an account? Go into it<Link to={"/log-in"}>Log in</Link>
        </span>
      </form>
    </div>
  );
};
