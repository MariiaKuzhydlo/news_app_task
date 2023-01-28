import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./style.scss";

export const NewsFullInfo = () => {
   const params = useParams();
   const [data, setData] = useState({} as any);
   const navigate = useNavigate();

   const fetchNews = () => {
      axios
         .get(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`)
         .then((res) => {
            setData(res.data);
         })
         .catch((err) => console.log(err));
   };

   useEffect(() => {
      fetchNews();
   }, []);

   return (
      <>
         <div className="fullInfo">
            <div className="imgWrapper">
               <img src={data.imageUrl} />
            </div>
            <div className="fullContainer">
               <div className="newsInfo">
                  <h1>{data.title}</h1>
                  <p>{data.summary}</p>
               </div>
               <div className="btn">
                  <button onClick={() => navigate(-1)}>Back to homepage</button>
                  <a target="_blank" href={data.url}>
                     <span> Full article</span>
                  </a>
               </div>
            </div>
         </div>
      </>
   );
};

export default NewsFullInfo;
