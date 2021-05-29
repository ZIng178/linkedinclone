import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import SharedOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

import "./Post.css";
import InputOption from "./InputOption";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="Post">
      <div className="post_header">
        <Avatar />
        <div className="postInfo">
          <h2> {name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <h4> {message}</h4>
      </div>
      <div className="post_buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={SharedOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
