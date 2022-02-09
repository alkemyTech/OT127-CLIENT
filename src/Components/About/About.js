import React, { useEffect } from "react";
import Title from "../Titulosynovedades/Title";
import { useDispatch, useSelector } from 'react-redux';
import { getUs } from "../../Redux/reducers/usSlice";


const About = ({
	text = "Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava ",
}) => {
	const dispatch = useDispatch()
	const info = useSelector(state => state.usReducer.info)

	useEffect(() => {
		dispatch(getUs())
	}, []);
	// El texto en un futuro se obtendra desde una API
	return (
		<>
			<Title title="Nosotros" />
			<main>
				<p>{info.name}</p>
				<p>{info.short_description}</p>
			</main>
		</>
	);
};

export default About;
