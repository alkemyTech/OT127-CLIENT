import React, { useEffect, useState } from "react";
import Title from "../Titulosynovedades/Title";
import { useDispatch, useSelector } from "react-redux";
import { getUs } from "../../Redux/reducers/usSlice";
import Spinner from "../Spinner/Spinner";

import SocialMedia from "./SocialMedia";
import Separator from "../Card/Separator";
import aboutImage from "../../images/nosotros.jpg"

const About = () => {
	const dispatch = useDispatch()
	const info = useSelector(state => state.usReducer.info)
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		dispatch(getUs());
		setLoading(false)
	}, []);//eslint-disable-line
	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<>
					<Separator image={aboutImage}>
						<h1><b>Nosotros</b></h1>
					</Separator>
					<main className="about__main">
						<p className="about__text about__text--name">{info.name}</p>
						<p className="about__text about__text--description">{info.long_description}</p>
					</main>
					<SocialMedia />
				</>
			)
			}
		</>
	);

};

export default About;
