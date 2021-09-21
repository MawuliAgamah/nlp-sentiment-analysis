import React, { useState } from "react";
import "../App.css"


export const Search = (props) => {

  //Create search term state variable
  const [searchTerm, setSearchTerm] = useState("")


  const handleChange = (e) => {
    setSearchTerm(e.target.value)
    console.log(e.target.value)
  };


  // props.setGlobalSearchTerm({ globalSearchTerm: true })

  const onSubmit = (e) => {
    e.preventDefault();
    props.callBack()
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
      <input
        type="search"
        name="searchTerm"
        placeholder="Search subreddits "
        value={searchTerm}
        onChange={handleChange}
      >
      </input>
      <button
        type="submit"
        //onClick={onSubmit} 
        onClick={onSubmit}
      //onClick={() => props.callBack}
      //onChange={props.onTap}
      > search
      </button>
    </form>
  )


}


