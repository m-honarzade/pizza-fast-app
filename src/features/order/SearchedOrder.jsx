import { useState } from "react"
import { useNavigate } from "react-router-dom";

const SearchedOrder = () => {
    const [searchedIdQuery,setSearchedIdQuery]=useState('');
    const navigate=useNavigate()
    const submitHandler=(e)=>{
      e.preventDefault();
      if(!searchedIdQuery) return;
      navigate(`/order/${searchedIdQuery}`)
      setSearchedIdQuery("")


    }
  return (
    <form onSubmit={submitHandler}>
        <input id="searchId" placeholder="Search Order #" value={searchedIdQuery}
         onChange={(e)=>setSearchedIdQuery(e.target.value)}/>
    </form>
  )
}

export default SearchedOrder