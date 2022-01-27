import Title from '../Titulosynovedades/Title'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './activities.css'
const Activities = () => {
	const [ activities, setActivities ] = useState([])
	const [ loading, setLoading ] = useState(true)
	const url = 'http://ongapi.alkemy.org/api/activities'
	
	const getActivities = () => {
		setLoading(true)
		axios
			.get(url)
			.then(({ data }) => {
				setActivities(data)
				setLoading(false)
			})
	}
	useEffect(() => {
	getActivities()
	}, [])
	return (
		<div className="activitites">
			<Title title="Actividades" />
			<ul className="activities__ul">
				{loading
					? <h2>Cargando...</h2>
					:activities.data.map(({ id, name, description, image }) => (
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
				))}
			</ul>
		</div>
	)
}
export default Activities