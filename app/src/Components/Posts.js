import React from "react";
import "../App.css"
//import data from "./data/cryptojsondata2.json";
import data from "../data/allsubredditsdata.json";





export const Posts = props => {

  console.log(data)
  console.log(props)

  return (
    <div className="discussion-container"> {[data].map(data => (
      [
        <ul>
          <li>
            {'r/ ' + data.subreddit[props.index]}
          </li>
          <li>
            {data.title[props.index]}
          </li>
          <li>
            {'See content'}
          </li>

        </ul>
      ]))
    }

    </div>
  );

};