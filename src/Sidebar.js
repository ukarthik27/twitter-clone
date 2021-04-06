import React, { useState } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

function Sidebar() {
  const [selectedOption, setOption] = useState("");
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarOption
        selectedOption={selectedOption}
        text="Home"
        Icon={HomeIcon}
        clickHandler={(e) => setOption("Home")}
      />
      <SidebarOption
        selectedOption={selectedOption}
        text="Explore"
        Icon={SearchIcon}
        clickHandler={(e) => setOption("Explore")}
      />
      <SidebarOption
        selectedOption={selectedOption}
        text="Notifications"
        Icon={NotificationsNoneIcon}
        clickHandler={(e) => setOption("Notifications")}
      />
      <SidebarOption
        selectedOption={selectedOption}
        text="Messages"
        Icon={MailOutlineIcon}
        clickHandler={(e) => setOption("Messages")}
      />
      <SidebarOption
        selectedOption={selectedOption}
        text="Bookmarks"
        Icon={BookmarkBorderIcon}
        clickHandler={(e) => setOption("Bookmarks")}
      />
      <SidebarOption
        selectedOption={selectedOption}
        text="Lists"
        Icon={ListAltIcon}
        clickHandler={(e) => setOption("Lists")}
      />
      <SidebarOption
        selectedOption={selectedOption}
        text="Profile"
        Icon={PermIdentityIcon}
        clickHandler={(e) => setOption("Profile")}
      />
      <SidebarOption
        selectedOption={selectedOption}
        text="More"
        Icon={MoreHorizIcon}
        clickHandler={(e) => setOption("More")}
      />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
