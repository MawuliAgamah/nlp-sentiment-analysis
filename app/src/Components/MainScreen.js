import React, { useState } from "react";
import AllPosts from "./DisplayAllPosts"
import { Search } from './SubredditSearch';
import SlidingMenu from "./SlidingMenuContainer";
import axios from "axios";


export const MainScreen = () => {



  const [isFetching, setisFetching] = useState(false)
  const [redditPosts, setRedditPosts] = useState([]);

  function onTap() {

    setisFetching(true)
    axios.get('/getReddit')
      .then(res => {
        setRedditPosts(res.data.data)
        console.log(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  };


  return (
    <>
      < Search
        callBack={onTap}
        className='subreddit-search'
      />
      {/* {isFetching === true ? <AllPosts requestData={redditPosts} numberOfPosts={10} /> : <AllPosts />} */}
      {<AllPosts requestData={redditPosts} numberOfPosts={redditPosts.length} />}
      <SlidingMenu />

    </>
  )


};


