import axios from "axios";
import React, { useState } from "react";
import "../App.css"


export const Search = () => {

  //Create search term state variable
  const [searchTerm, setSearchTerm] = useState("")


  const handleChange = (e) => {
    setSearchTerm(e.target.value)
    console.log(e.target.value)
  };

  const onSubmit = (e) => {

    e.preventDefault();
    const searchedItem = { searchTerm };
    //Get form data from the state

    fetch('/subreddit_search', {

      //specify the method 
      method: 'POST',
      //Declare the type of data being sent
      headers: { 'Content-Type': 'application/json' },
      //The data being sent with the reqe
      body: JSON.stringify(searchedItem)
    }).then(() => { console.log(searchedItem + 'Search sent to server') })



  };


  return (
    <form>
      <input type="search"
        name="searchTerm"
        placeholder="Search subreddits "
        value={searchTerm}
        onChange={handleChange} >
      </input>
      <button type="submit" onClick={onSubmit}> search </button>
    </form>

  )


}


