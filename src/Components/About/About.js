import React, { useEffect, useState } from "react";
import Title from "../Titulosynovedades/Title";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUs } from "../../Redux/reducers/usSlice";
import Spinner from "../Spinner/Spinner";

import SocialMedia from "./SocialMedia";

const About = ({
  text = "Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava ",
}) => {
	const dispatch = useDispatch()
	const info = useSelector(state => state.usReducer.info)
	const [loading, setLoading] = useState(false);
	const history = useHistory();
	const isLogged = useSelector((state) => state.authReducer.userIsLogged);
	

	useEffect(() => {
		setLoading(true);
		if (!isLogged) {
		  history.push("/login");
		}
		dispatch(getUs());
	  }, []);//eslint-disable-line
	// El texto en un futuro se obtendra desde una API
	return (
		<>
			{loading ? (
				<Spinner/>
			) : (
				<>
				<Title title="Nosotros" />
				<main>
					<p>{info.name}</p>
					<p>{info.short_description}</p>
				</main>
				<SocialMedia />
				</>
				)
			}
		</>
	);

};

export default About;
