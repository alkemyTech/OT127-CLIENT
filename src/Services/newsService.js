import { Get } from "./publicApiService";

const url = "http://ongapi.alkemy.org/api/news";

const getNews = async (setMethod) => {
  let newsFromAPI = await Get(url, null);
  let data = newsFromAPI.data.data;
  setMethod(data);
};

export default getNews;
