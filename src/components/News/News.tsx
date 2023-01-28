import React from "react";
import "./style.scss";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

export const News = ({ news }: any) => {
   return (
      <div className="card">
         <div className="cardImg">
            <img src={news.imageUrl} alt="cardImage" />
         </div>
         <div className="cardInfo">
            <div className="dateOfPublision">
               <span>{dateFormat(news.publishedAt, "mmmm dS, yyyy")}</span>
            </div>
            <div className="cardTitle">{news.title}</div>
            <p>{news.summary}</p>
            <Link to={`/${news.id}`}>
               <div className="btn">Read more</div>
            </Link>
         </div>
      </div>
   );
};

export default News;
