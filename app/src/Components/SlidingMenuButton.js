import React, { Component } from "react";
import './SlidingMenuButton.css';

const MenuButton = props => {


  return (
    <button className="roundButton" onMouseDown={() => props.setVisible(!props.visible)}></button>
  )

}


export default MenuButton;