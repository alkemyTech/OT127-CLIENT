import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getNews } from '../../Redux/reducers/newsSlice'
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import Spinner from '../Spinner/Spinner';
import Comments from "./Comments";

const News = () => {
	const dispatch = useDispatch()
	const [ showComments, setShowComments ] = useState(false);
	const [ isLoading, setIsLoading ] = useState(true);
	useBottomScrollListener(() => setShowComments(true));

<<<<<<< HEAD
  const news = useSelector(state => state.newsReducer.news.data)
  
  const newsList = () => {
    return news.length ? (
      news.map((element) => (
        <li key={element.id}>
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
=======
>>>>>>> 03ed2e218d3cb49b7dfc00d802e2e4412a317482

	useEffect(() => {
		dispatch(getNews())
		setIsLoading(false)
	}, []); //eslint-disable-line

	const news = useSelector(state => state.newsReducer.news.data)

	const newsList = () => {
		return news.length ? (
			news.map((element) => (
				<li className="card-info" key={element.id}>
					<h3>{element.name}</h3>
					<p>{element.description}</p>
				</li>
			))
		) : (
			null
		);
	};

	return (
		<>
			{isLoading
				? <Spinner />
				: (<div>
					<h1>Novedades</h1>
					<ul className="list-container">{newsList()}</ul>
					{showComments && <Comments />}
				</div>
				)}
		</>
	)
}

export default News
