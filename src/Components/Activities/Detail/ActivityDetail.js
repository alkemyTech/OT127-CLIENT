import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Axios from "axios";

const ActivityDetail = () => {

	const [activity, setActivity] = useState({});

	const {id} = useParams();

	const getActivity = async () => {
		try {
			const url = `${process.env.REACT_APP_ACTIVITIES_ENDPOINT}/${id}`;
			const {data} = await Axios.get(url, {
				headers: {
				  Group: 127,
				},
			  });
			const activityData = data.data;
			setActivity(activityData);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getActivity();
	}, []);//eslint-disable-line

	return (
		<>
			<div>{activity.name}</div>
			<div>{activity.description}</div>
      <img src={activity.image} alt="actividad"></img>
		</>
	);
};

export default ActivityDetail;
