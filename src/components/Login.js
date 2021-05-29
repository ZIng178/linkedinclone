import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { login } from "../features/userSlice";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      // alert("please enter a full name ");
    }
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user
        .updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
        .then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoUrl: profilePic,
            })
          );
        });
    });
    // .catch((error) => alert(error));
  };

  const loginApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png" />
      <form>
        <input
          type="text"
          placeholder="Full name (required if registering)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profile Picture URL (optional)"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          type="Email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginApp}>
          {" "}
          Sign In{" "}
        </button>
      </form>
      <p>
        {" "}
        Not a member ?{" "}
        <span className="login_register" onClick={register()}>
          {" "}
          Register Now{" "}
        </span>
      </p>
    </div>
  );
};

export default Login;
