import React, { useEffect, useState } from "react";
import TweetBox from "./TweetBox.js";
import Post from "./Post.js";
import "./Feed.css";
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          postid: doc.id,
          ...doc.data(),
        }))
      )
    );
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {!posts.length && (
          <Post
            key="origin1"
            displayName="Miles Morales"
            username="milesmorales"
            verified
            text="It's a leap of faith"
            avatar="https://images4.alphacoders.com/960/thumbbig-960281.jpg"
            image="https://i.pinimg.com/originals/c1/cf/34/c1cf34caee3bc0c1c3b8559c76313fd2.gif"
          />
        )}
        {posts.map((post) => (
          <Post
            key={post.postid}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
