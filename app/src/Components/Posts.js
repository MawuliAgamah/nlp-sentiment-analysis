import React, { useEffect, useState } from "react";
import "../App.css"
import axios from 'axios'
//import data from "./data/cryptojsondata2.json";
//import data from "../data/allsubredditsdata.json";



export const Posts = props => {

  const [redditPosts, setRedditPosts] = useState([]);

  //Make an api call to the flask backend

  console.log("Post.js: " + props.theSearchedTerm)


  // useEffect(() => {
  //   axios.get('/getReddit')
  //     .then(res => {
  //       setRedditPosts(res)
  //       console.log(res)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }, [])


  return (


    <div className="post-container"> {[redditPosts].map(data => (
      [
        <ul>
          {<li >
          </li>}
          {/* <li class='post-title'>
            {data.title[props.index]}
          </li>
          <li>
            {'See content'}
          </li> */}

        </ul>
      ]))
    }

    </div >
  );

};