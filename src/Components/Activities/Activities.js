import Title from '../Titulosynovedades/Title'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './activities.css'
const Activities = () => {
	const [ activities, setActivities ] = useState(null)
	const [ loading, setLoading ] = useState(false)
	const url = 'http://ongapi.alkemy.org/api/activities'
	useEffect(() => {
		axios.get(url)
			.then(({ data }) => {
				setActivities(data)
				setLoading(true)
			})
	}, [])
	return (
		<>
			<Title title="Actividades" />
			<ul>
				{loading ? activities.data.map(({ id, name, description, image }) => (
					<li key={id}>
						<div className="activities__container">
							<div className="activities__body">
								<div className="activities__body-title">
									<h2>{name}</h2>
								</div>
								<div className="activities__body-p">
									{description}
								</div>
							</div>
							<div className="activities__image">
								<img src={image} alt={name} />
							</div>
						</div>
					</li>
				)) : <h2>Cargando...</h2>}
			</ul>
		</>
	)
}
export default Activities