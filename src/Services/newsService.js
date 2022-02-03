import { Get } from "./publicApiService";

const url = process.env.REACT_APP_ENDPOINTS_NEWS;

const getNews = async (setMethod) => {
  let newsFromAPI = await Get(url, null);
  let data = newsFromAPI.data.data;
  setMethod(data);
};

export default getNews;
