import React, { useState } from "react";
import MenuButton from "./SlidingMenuButton";
import Menu from "./SlidingMenu"

const SlidingMenu = props => {

  const [visible, setVisible] = useState(false)


  console.log(visible)

  const handleMouseDown = (e) => {

  }
  return (
    <div className='sliding-menu-container'>
      <hi> The sliding menu will go here </hi>
      <button onClick={() => setVisible(!visible)} />
      <MenuButton setVisible={setVisible} />
      <Menu handleMouseDown={handleMouseDown} menuVisibility={visible} />
    </div>
  )
}

export default SlidingMenu;