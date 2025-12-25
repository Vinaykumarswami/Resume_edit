import React from 'react'
import { FaSearch } from "react-icons/fa"; 

const SearchBar = () => {
  return (
    <div className="h-[100%] w-[30%] m-3 flex justify-between item-center">
        <input type="text" placeholder='Search' className="h-[45px] w-[100%]  border rounded-full p-4 shadow-2xl"/>
         <span className=" absolute left-[33%] top-[3%] text-[30px] text-[#e66]">
            <FaSearch />
         </span>
    </div>
  )
}

export default SearchBar
