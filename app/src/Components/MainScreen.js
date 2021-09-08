import React from "react";
import AllPosts from "../Components/DisplayAllPosts"
import { Search } from '../Components/SubredditSearch';


export const MainScreen = () => {


  return (
    <>
      <Search className='subreddit-search' />
      <AllPosts numberOfPosts={100} />
    </>
  )


};


