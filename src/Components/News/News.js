import React, { useState, useEffect } from "react"
import getNews from "../../Services/newsService"
import Spinner from "../Loaders/Spinner"

const News = () => {
	const [news, setNews] = useState([])

	useEffect(() => {
		getNews(setNews)
	}, [])

	const newsList = () => {
		return news.length ? (
			news.map((element) => (
				<li className="card-info" key={element.id}>
					<h3>{element.name}</h3>
					<p>{element.description}</p>
				</li>
			))
		) : (
			<Spinner />
		)
	}

	return (
		<>
				<div>
					<h1>Novedades</h1>
					<ul className="list-container">{newsList()}</ul>
				</div>
		</>
	)
}

export default News
