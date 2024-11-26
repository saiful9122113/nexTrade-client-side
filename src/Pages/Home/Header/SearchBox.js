import React, { useState } from "react";
import LocationIcon from "../../../Assets/images/location.png";
import SearchIcon from "../../../Assets/images/searchicon.svg";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate()

  const [searchTerm, SetSearchTerm] = useState("")
  
  const handleSumbit = (e) => {
    e.preventDefault()
    
    if(searchTerm.trim()) {
      navigate(`/products/${searchTerm.trim()}`)
    }
  }

  return (
    <div style={{ backgroundColor: '#149777' }}>
      <div className="container mx-auto flex flex-col justify-end items-center gap-4 py-10">
        <div className="flex items-center bg-brandTwo px-3 py-1.5 rounded-[20px]">
          <img src={LocationIcon} alt="location" className="w-6" />
          <span className="text-white text-md">All of bangladesh</span>
        </div>

        <form onSubmit={handleSumbit} className="flex items-center w-full lg:w-3/4 bg-white rounded-full p-1">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="What are you looking for?"
            className="w-full px-4 focus:outline-none text-md"
            value={searchTerm}
            onChange={e => SetSearchTerm(e.target.value)}
          />
          <div className="flex justify-center items-center bg-yellowBrand rounded-full p-4">
            <img src={SearchIcon} alt="SearchIcon" className="w-6" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
