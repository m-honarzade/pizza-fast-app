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
         onChange={(e)=>setSearchedIdQuery(e.target.value)}
         className="rounded-full text-sm px-4 py-2 bg-yellow-100 placeholder:text-stone-400 
         w-28 sm:w-64 sm:focus:w-72 transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50"/>
    </form>
  )
}

export default SearchedOrder