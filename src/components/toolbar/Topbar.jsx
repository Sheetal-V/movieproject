import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import React from "react";
import "./topbar.css";

function Topbar() {
  return (
    <div className="topbarcontainer">
      <div className="topbarLeft">
        <div className="span logo">SocialMedia</div>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLinks">Homepage</span>
          <span className="topbarLinks">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src=".\assest\person\sad-2042536_1920.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}

export default Topbar;
