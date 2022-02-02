import { useState, useEffect } from "react";
import axios from "axios";


const MemberListUs = () => {
	const url = "http://ongapi.alkemy.org/api/members"
	const [ members, setMembers ] = useState([])

	useEffect(() => {
		axios.get(url)
			.then(res => {
				setMembers(res.data.data)
				console.log(members)
			})
			.catch(err => {
				alert(err)
			})
	}, [])

	return (
		<>
			<h1>memberlistusa</h1>
		</>
	)
}

export default MemberListUs;