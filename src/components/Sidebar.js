import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Sidebar = () => {
  const user = useSelector(selectUser);
  const recentItems = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash"> # </span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar_avatar">
          {user.email[0]}
        </Avatar>
        <h2> {user.displayName}</h2>
        <h4> {user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you </p>
          <p className="sidebar_statNumber">200</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post </p>
          <p className="sidebar_statNumber">190</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItems("reactjs")}
        {recentItems("programming")}
        {recentItems("software engineering")}
        {recentItems("design")}
        {recentItems("developer")}
      </div>
    </div>
  );
};

export default Sidebar;
