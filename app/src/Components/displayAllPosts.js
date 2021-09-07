import React from 'react';
import "../App.css"
import { Posts } from "../Components/Posts"


const AllPosts = props => {


  //Function to render n number of posts
  const renderPosts = () => {
    let posts = []

    for (let i = 0; i < props.numberOfPosts; i++) {
      posts.push(<Posts index={i} />)
    }

    return (
      <div>
        {posts}
      </div>


    )

  }

  return (
    <div className='all-posts-containter'>
      {renderPosts()}
    </div>
  )
}

export default AllPosts