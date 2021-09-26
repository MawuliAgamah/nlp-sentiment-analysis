import React from "react";
import { GoogleNews } from "./GoogleNews";
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './navigation.css';

export const Sidebar = () => {

  return (
    <>
      <div className="sidebar-container">
        <ul>
          <li>
            <Link to='/' className='navigation-reddit' >Reddit</Link>
          </li>
          <li>
            <Link to='/google' className='navigation-reddit'> Google </Link>
          </li>
          <li> <Link to='/' className='navigation-reddit'> Twitter </Link></li>
        </ul>
      </div>
    </>

  )



}