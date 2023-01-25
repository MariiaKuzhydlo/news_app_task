import React from "react";
import News from "../News/News";
import "./style.scss";

export const ListPage = ({ searchResults }: any) => {
   const results = searchResults.map((news: any) => (
      <News key={news.id} news={news} />
   ));

   const content = results?.length ? (
      results
   ) : (
      <article>
         <p>No Matching News</p>
      </article>
   );

   return (
      <main>
         <div className="newsCounter">Results:{content.length}</div>
         <div className="newsList">{content}</div>
      </main>
   );
};

export default ListPage;
