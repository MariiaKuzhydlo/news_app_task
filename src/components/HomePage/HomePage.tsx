import React from "react";
import { getNewsList } from "../../api/requests";
import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ListPage from "../ListPage/ListPage";
import "./style.scss";

export const HomePage = () => {
   const [newsList, setNewsList] = useState([]);
   const [searchResults, setSearchResults] = useState([]);

   useEffect(() => {
      getNewsList().then((json) => {
         setNewsList(json);
         setSearchResults(json);
      });
   }, []);

   return (
      <div className="container">
         <SearchBar newsList={newsList} setSearchResults={setSearchResults} />
         <ListPage searchResults={searchResults} />
      </div>
   );
};

export default HomePage;
