import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import { Search } from "@material-ui/icons";
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1365069551495438343"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="MarcusRashford"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://reactjs.org/docs/getting-started.html"}
          options={{ text: "#reactjs is awesome", via: "jordwalke" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
