import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

type CardProps = {
   newsList: any[];
   setSearchResults: any;
};

export const SearchBar = ({ newsList, setSearchResults }: CardProps) => {
   const handleSubmit = (e: any) => e.preventDefault();

   const handleSearchChange = (e: any) => {
      if (!e.target.value) return setSearchResults(newsList);

      const resultsArray = newsList.filter(
         (item) =>
            item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
            item.summary.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchResults(resultsArray);
   };
   return (
      <div className="searchContainer">
         <p>Filter by keywords</p>
         <form className="search" onSubmit={handleSubmit}>
            <button className="search__button">
               <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input
               className="search__input"
               type="text"
               id="search"
               onChange={handleSearchChange}
            />
         </form>
      </div>
   );
};

export default SearchBar;
