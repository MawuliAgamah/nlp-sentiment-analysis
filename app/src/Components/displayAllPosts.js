import React from 'react';
import "../App.css"
import { Posts } from "../Components/Posts"


const AllPosts = props => {

  let posts = []

  const renderPosts = () => {
    for (let i = 0; i < this.props.numberOfPosts; i++) {
      posts.push(<Posts className='post' index={i} />)
    }
    return posts;

  }




  return (
    <div className='all-posts-containter'>
      {renderPosts()}
    </div>
  )
}

export default AllPosts