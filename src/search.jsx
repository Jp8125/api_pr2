import React, { useState } from 'react'
const Search=({fetchUserDetails})=> {
  const {searchQuery,setSearchQuery}=useState("");
  const handelChange=(event)=>{
    setSearchQuery(event.target.value);
    fetchUserDetails(searchQuery);
  };
  return (
    <div>
      <input value={searchQuery} onChange={handelChange}/>
    </div>
  )
}

export default Search
