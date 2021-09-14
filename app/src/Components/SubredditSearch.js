import React, { useState } from "react";
import "../App.css"


export const Search = () => {


  function handleChange(e) {
    console.log(e.target.value)
  }

  const [searchTerm, setSearchTerm] = useState('')


  return (
    <input type="search" name="searchTerm" placeholder="Search subreddits " onChange={e => setSearchTerm(e.target.value)}>

    </input>

  )


}
