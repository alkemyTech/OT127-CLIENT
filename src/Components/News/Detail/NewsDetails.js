import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Title from "../../Titulosynovedades/Title";
import Spinner from "../../Loaders/Spinner";
import { sweetAlertError } from "../../../Services/sweetAlertServices";

const NewsDetails = ({ title }) => {
	const [ news, setNews ] = useState({});
	const [ isLoading, setIsLoading ] = useState(true);
	const { id } = useParams();
	const getNewsData = async () => {
			await axios
			.get(`http://ongapi.alkemy.org/api/news/${id}`)
			.then((res) => {
				setNews(res.data.data);
				setIsLoading(false);
			})
			.catch((err) => {
				sweetAlertError("No existe la noticia");
				setIsLoading(false);
			});
	};
	useEffect(() => {
		getNewsData();
	}, []);

	return (
		<div>
			{isLoading ? (
				<Spinner />
			) : (
				<>
					<Title title={title} />
					<p>{news.name}</p>
					<img src={news.image} alt={title} />
					<p>{news.content}</p>
				</>
			)}
		</div>
	);
};

export default NewsDetails;