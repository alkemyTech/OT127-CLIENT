import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";
import Axios from "axios";
import {
	sweetAlertInfo,
	sweetAlertError,
} from "../../Services/sweetAlertServices";
import Spinner from "../Spinner/Spinner";

// ! Sacar Mock y hacer logica de Get y agregar logica de Edit, Delete y renderizar en Backoffice

import {
	Container,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	Paper,
	Button,
} from "@mui/material";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableRow, {tableRowClasses} from "@mui/material/TableRow";

const ActivitiesList = () => {
	const [activities, setActivities] = useState([]);
	const [loading, setLoading] = useState(true);

	const history = useHistory();

	// logica para traerme los datos y agregue el spinner
	const getActivities = async () => {
		try {
			setLoading(true);
			const url = process.env.REACT_APP_ACTIVITIES_ENDPOINT;
			const {data} = await Axios.get(url);
			const activitiesData = data.data;
			setActivities(activitiesData);
      setLoading(false);
		} catch (error) {
			sweetAlertError();
			return error;
		}
	};

	useEffect(() => {
		getActivities();
	}, []);

	// Editar redireccion al formulario segun el ID que seleciona de la tabla
	const handleEdit = (id) => {
		history.push(`/backoffice/create-activity/${id}`);
	};

	// Eliminar y actualizar el estado para mostar sin el que esta eliminado
	const handleDelete = async (id, name, image) => {
		try {
			const url = `${process.env.REACT_APP_ACTIVITIES_ENDPOINT}/${id}`;
			const respuesta = await Axios.delete(url, {
				id,
				name,
				image,
			});
			const activitiesUpDate = activities.filter(
				(activity) => activity.id !== id
			);
			setActivities(activitiesUpDate);
			sweetAlertInfo("Registro Eliminado con Exito");
			console.log(respuesta);
		} catch (error) {
			return error;
		}
	};

	// estilos
	const StyledTableCell = styled(TableCell)(({theme}) => ({
		[`&.${tableCellClasses.head}`]: {
			backgroundColor: theme.palette.common.black,
			color: theme.palette.common.white,
		},
		[`&.${tableCellClasses.body}`]: {
			fontSize: 14,
		},
	}));

	const StyledTableRow = styled(TableRow)(({theme}) => ({
		[`&.${tableRowClasses.root}`]: {
			height: "50px",
			width: "70px",
		},
		"&:nth-of-type(odd)": {
			backgroundColor: theme.palette.action.hover,
		},
		// hide last border
		"&:last-child td, &:last-child th": {
			border: 0,
		},
	}));
	// fin de stilos
	return (
		<Container maxWidth="md">
			<Link to="/backoffice/create-activity">Create Activity</Link>
			{loading ? (
				<Spinner />
			) : (
				<TableContainer component={Paper}>
					<Table sx={{minWidth: 600}} stickyHeader>
						<TableHead>
							<TableRow>
								<StyledTableCell>Nombre</StyledTableCell>
								<StyledTableCell>Imagen</StyledTableCell>
								<StyledTableCell></StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{activities.map((activity) => (
								<StyledTableRow key={activity.id}>
									<StyledTableCell scope="row">{activity.name}</StyledTableCell>
									<StyledTableCell>
										<img
											src={activity.image}
											alt={activity.name}
											width="50px"
										/>
									</StyledTableCell>
									<StyledTableCell style={{width: "25%"}}>
										<Button
											color="success"
											onClick={() => handleEdit(activity.id)}
										>
											Editar
										</Button>{" "}
										<Button
											color="error"
											onClick={() =>
												handleDelete(activity.id, activity.name, activity.image)
											}
										>
											Eliminar
										</Button>
									</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</Container>
	);
};

export default ActivitiesList;
