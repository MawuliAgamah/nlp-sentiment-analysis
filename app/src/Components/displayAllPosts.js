import React from 'react';
import "../App.css"
import { Posts } from "../Components/Posts"


const AllPosts = () => {

  return (
    <div className='all-posts-containter'>
      <Posts index={1} />
      <Posts index={2} />
      <Posts index={3} />
      <Posts index={4} />
    </div>
  )
}

export default AllPosts