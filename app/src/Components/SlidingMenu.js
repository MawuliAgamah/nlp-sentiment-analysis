import React from "react";
import "./SlidingMenu.css";

const Menu = props => {

  var visibility = 'default';


  if (props.menuVisibility && props.defaultMenu) {
    visibility = 'show'
    console.log(visibility)
  } else if ((!props.menuVisibility && !props.defaultMenu) || (!props.menuVisibility && props.defaultMenu)) {
    visibility = 'hide'
    console.log(visibility)
  } else {
    visibility = 'default'

  }

  return (
    <div id="flyoutMenu"
      className={visibility}>
      <ul>
        <li> Sentiments </li>
        <li> Charts </li>
      </ul>
    </div>
  )




}

export default Menu;