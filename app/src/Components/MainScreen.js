import React, { useState } from "react";
import AllPosts from "../Components/DisplayAllPosts"
import axios from "axios";
import { Search } from '../Components/SubredditSearch';
import { Button } from '../Components/Button'

export const MainScreen = () => {


  const [globalSearchTerm, setGlobalSearchTerm] = useState('No Search')


  return (
    <>
      <Search setGlobalSearchTerm={setGlobalSearchTerm} className='subreddit-search' />
      <AllPosts globalSearchTerm={globalSearchTerm} numberOfPosts={100} />
    </>
  )


};


