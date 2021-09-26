import React from "react";
import "./SlidingMenu.css";

const Menu = props => {

  var visibility = 'hide';

  if (props.menuVisibility) {
    visibility = 'show'
  }

  return (
    <div id="flyoutMenu"
      onMouseDown={props.handleMouseDown}
      className={visibility}>
      <h2>Sentiments</h2>
      <h2>Charts</h2>
    </div>
  )




}

export default Menu;