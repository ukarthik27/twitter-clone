import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
  VerifiedUser,
} from "@material-ui/icons";
// import  from "@material-ui/icons";
import React from "react";
import "./Post.css";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://images4.alphacoders.com/960/thumbbig-960281.jpg" />
      </div>
      <div className="post__body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>
              Miles Morales
              <span className="post_headerSpecial">
                <VerifiedUser className="post__badge" />
                @newspideyKid
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p> Its just a leap of faith</p>
          </div>
        </div>
        <img
          src="https://i.pinimg.com/originals/c1/cf/34/c1cf34caee3bc0c1c3b8559c76313fd2.gif"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <Publish fontSize="small" />
        </div>
      </div>
    </div>
  );
}
export default Post;
