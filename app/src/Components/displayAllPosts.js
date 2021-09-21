import React from 'react';
import "../App.css"
import { Posts } from "./Posts"


const AllPosts = props => {


  //Function to render n number of posts
  const renderPosts = () => {
    let posts = []
    for (let i = 0; i < props.numberOfPosts; i++) {
      posts.push(<Posts dataFromMain={props.requestData} index={i} />)
    }
    return (
      <div>
        {posts}
      </div>
    )

  }

  return ([
    <div id='allPosts' className='all-posts-containter'>
      {renderPosts()}
    </div>
  ])
}

export default AllPosts