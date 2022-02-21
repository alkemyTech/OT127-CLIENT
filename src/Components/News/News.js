import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../../Redux/reducers/newsSlice";
import { getFilteredNews } from "../../Services/newsService";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import Spinner from "../Spinner/Spinner";
import Comments from "./Comments";
import VideoPlayer from "./VideoPlayer";
import SearchForm from "./SearchForm";

const News = () => {
  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredNews, setFilteredNews] = useState([]);
  useBottomScrollListener(() => setShowComments(true));

  useEffect(() => {
    dispatch(getNews());
    setIsLoading(false);
  }, []); //eslint-disable-line

  const news = useSelector((state) => state.newsReducer.news.data);

  const newsList = () => {
    //Ésta es la lista de novedades completa
    return news.length
      ? news.map((element) => (
          <li className="card-info" key={element.id}>
            <h3>{element.name}</h3>
            <p>{element.content}</p>
          </li>
        ))
      : null;
  };

  const filteredNewsList = () => {
    // Ésta es la lista de novedades filtradas
    return filteredNews.length
      ? filteredNews.map((element) => (
          <li className="card-info" key={element.id}>
            <h3>{element.name}</h3>
            <p>{element.content}</p>
          </li>
        ))
      : null;
  };

  const searchNews = async (event) => {
    //Ésta función hace la búsqueda de novedades y setea un estado con las noticias filtradas
    if (event.target.value.length >= 3) {
      let data = await getFilteredNews(event.target.value);
      setFilteredNews(data);
    } else {
      setFilteredNews(news);
    }
  };

  return (
    <div className="news">
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <h1 className="news__title">Novedades</h1>
          <section className="news__videoplayercontainer">
            <h1 className="news__subtitle">Último evento</h1>
            <VideoPlayer />
          </section>
          <SearchForm searchNews={searchNews} />
          <ul className="news__list">
            {filteredNews.length ? filteredNewsList() : newsList()}
          </ul>
          {showComments && <Comments />}
        </div>
      )}
    </div>
  );
};

export default News;
