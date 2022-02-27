import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../../Redux/reducers/newsSlice";
import { getFilteredNews } from "../../Services/newsService";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import Spinner from "../Spinner/Spinner";
import Comments from "./Comments";
import VideoPlayer from "./VideoPlayer";
import SearchForm from "./SearchForm";
import Separator from "../Card/Separator";
import novedadesImg from "../../images/novedades.jpg"

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
        <div className="card-custom__wrapper news__listitem">
          <img src={element.image} alt="" className="card-custom__image" />
          <div className="card-custom__content">
            <h3 className="card-custom__title">{element.name}</h3>
          </div>
        </div>
      ))
      : null;
  };

  const filteredNewsList = () => {
    // Ésta es la lista de novedades filtradas
    return filteredNews.length
      ? filteredNews.map((element) => (
        <div className="card-custom__wrapper news__listitem">
          <img src={element.image} alt="" className="card-custom__image" />
          <div className="card-custom__content">
            <h3 className="card-custom__title">{element.name}</h3>
          </div>
        </div>
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
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="news">
          <section className="news__videoplayercontainer">
            <h1 className="news__subtitle">Último evento</h1>
            <VideoPlayer />
          </section>
          <Separator image={novedadesImg} >
            <h1>Novedades</h1>
          </Separator>
          <SearchForm searchNews={searchNews} />
          <div className="card-custom news__list">
            {filteredNews.length ? filteredNewsList() : newsList()}
          </div>
          {showComments && <Comments />}
        </div>
      )}
    </>
  );
};

export default News;
