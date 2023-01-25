import axios from "axios";

export const api = axios.create({
   baseURL: "https://api.spaceflightnewsapi.net/",
});

export const getNewsList = async () => {
   const response = await api.get("v3/articles?_limit=21");
   return response.data;
};
