import React, { useState } from "react";
import MenuButton from "./SlidingMenuButton";
import Menu from "./SlidingMenu"

const SlidingMenu = props => {

  const [visible, setVisible] = useState(false)
  const [defaultMenu, setDefaultMenu] = useState(false)

  console.log(defaultMenu)


  return (
    <div className='sliding-menu-container'>
      <button className="roundButton" onClick={() => { setVisible(!visible); setDefaultMenu(!defaultMenu) }}> Tools </button>
      <Menu menuDefault={defaultMenu} menuVisibility={visible} />
    </div>
  )
}

export default SlidingMenu;