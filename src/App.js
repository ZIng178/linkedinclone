import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./components/Login";
import { auth } from "./components/firebase";
import Widgets from "./components/Widget";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uId: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          {/* App Body */}
          <Sidebar />

          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
