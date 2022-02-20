import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
/* import {
  sweetAlertInfo,
  sweetAlertError,
} from "../../Services/sweetAlertServices"; */
import Spinner from "../Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import {
  getActivities,
  getActivitiesSearch,
} from "../../Redux/reducers/activitiesSlice";
import {
  Container,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow, { tableRowClasses } from "@mui/material/TableRow";

const Activities = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activitiesReducer.activities);

  const history = useHistory();

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  // Editar redireccion al formulario segun el ID que seleciona de la tabla
  const handleEdit = (id) => {
    history.push(`/backoffice/create-activity/${id}`);
  };

  // Eliminar y actualizar el estado para mostar sin el que esta eliminado
  /* const handleDelete = async (id, name, image) => {
    try {
      const url = `${process.env.REACT_APP_ACTIVITIES_ENDPOINT}/${id}`;
      await Axios.delete(url, {
        id,
        name,
        image,
      });
      const activitiesUpDate = activities.filter(
        (activity) => activity.id !== id
      );
      setActivities(activitiesUpDate);
      sweetAlertInfo("Registro Eliminado con Exito");
    } catch (error) {
      return error;
    }
  }; */

  // estilos
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
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

  const handleActivitiesSearch = (e) => {
    const { value } = e.target;
    if (value.length > 2) {
      dispatch(getActivitiesSearch(value));
    } else {
      dispatch(getActivities());
    }
  };
  return (
    <Container maxWidth="md">
      <Link to="/backoffice/create-activity">Create Activity</Link>
      {!activities.length ? (
        <Spinner />
      ) : (
        <TableContainer component={Paper}>
          <input
            type="search"
            name="search"
            onChange={(e) => handleActivitiesSearch(e)}
          />
          <Table sx={{ minWidth: 600 }} stickyHeader>
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
                  <StyledTableCell style={{ width: "25%" }}>
                    <Button
                      color="success"
                      onClick={() => handleEdit(activity.id)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="error">Eliminar</Button>
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

export default Activities;
