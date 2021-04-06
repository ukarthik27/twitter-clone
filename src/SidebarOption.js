import React from "react";
import "./SidebarOption.css";

function SidebarOption({ selectedOption, text, Icon, clickHandler }) {
  return (
    <div
      className={`sidebarOption ${
        selectedOption === text && "sidebarOption--active"
      }`}
      onClick={clickHandler}
    >
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
