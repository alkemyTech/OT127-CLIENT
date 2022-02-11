import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../../Redux/reducers/newsSlice";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import Comments from "./Comments";

const News = () => {
  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);
  useBottomScrollListener(() => setShowComments(true));

  useEffect(() => {
    dispatch(getNews());
  }, []); //eslint-disable-line

  const news = useSelector((state) => state.newsReducer.news.data);

  const newsList = () => {
    return news.length ? (
      news.map((element) => (
        <li className="card-info" key={element.id}>
          <h3>{element.name}</h3>
          <p>{element.content}</p>
        </li>
      ))
    ) : (
      <div>
        <p>No hay novedades</p>
      </div>
    );
  };

  return (
    <>
      <h1>Novedades</h1>
      <ul className="list-container">{newsList()}</ul>
      {showComments && <Comments />}
    </>
  );
};

// 	const newsList = () => {
// 		return news.length ? (
// 			news.map((element) => (
// 				<li className="card-info" key={element.id}>
// 					<h3>{element.name}</h3>
// 					<p>{element.description}</p>
// 				</li>
// 			))
// 		) : (
// 			null
// 		);
// 	};

// 	return (
// 		<>
// 			{isLoading
// 				? <Spinner />
// 				: (<div>
// 					<h1>Novedades</h1>
// 					<ul className="list-container">{newsList()}</ul>
// 				</div>
// 				)}
// 		</>
// 	)
// }

export default News;
