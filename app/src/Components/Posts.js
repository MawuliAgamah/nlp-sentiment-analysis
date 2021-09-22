import React, { useState } from "react";
import "../App.css"


export const Posts = props => {


  console.log(props.dataFromMain.length)
  return (

    <div className="post-container">
      {
        props.dataFromMain.length > 0 ?
          [props.dataFromMain].map(data => (
            <ul className="post-container-ul" >
              <li class='post-title' key={data[props.index].index}>

                {data[props.index].title}
              </li>
              <li class='post-content' key={data[props.index].index}>
                {data[props.index].content}
              </li>
            </ul>
          )) : 'Loading'
      }
    </div >

  )
};