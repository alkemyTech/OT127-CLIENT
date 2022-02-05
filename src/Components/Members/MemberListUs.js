import { useState, useEffect } from "react"
import axios from "axios"
import "./styles.scss"


const MemberListUs = () => {
	const url = "http://ongapi.alkemy.org/api/members"
	const [ members, setMembers ] = useState([])
	const [ loading, setLoading ] = useState(true)

	const getMembers = async () => {
		await	axios.get(url)
			.then(res => {
				setMembers(res.data.data)
				setLoading(false)
			})
			.catch(err => {
				alert(err)
			})
	}
	useEffect(() => {
	getMembers()
	}, [])

	return (
		<>
			{(loading)
				? <h1>Cargando...</h1>
				: <div className="members">
					<h1>Miembros</h1>
					<div className="members__container">
						{members.map(member => (
							<li className="members__item" key={member.id}>
								<div className="members__item__img">
									<img src={member.image} alt={member.name} />
								</div>
								<div className="members__item__body">
									<div>
										<h2>{member.name}</h2>
										<p>{member.description}</p>
									</div>
									<div>
										<p>{member.facebookUrl}</p>
										<p>{member.linkedinUrl}</p>
									</div>
								</div>
							</li>
						))}
					</div>
				</div>}
		</>
	)
}

export default MemberListUs