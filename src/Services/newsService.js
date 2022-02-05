import { Get } from "./publicApiService";
import { sweetAlertError } from "./sweetAlertServices";

const url = "http://ongapi.alkemy.org/api/news";

const getNews = async (setMethod) => {
  try {
    let newsFromAPI = await Get(url, null);
    let data = newsFromAPI.data.data;
    setMethod(data);
  } catch (error) {}
};

export default getNews;
