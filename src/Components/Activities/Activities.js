import { useEffect } from "react";
import { Link } from "react-router-dom";
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
import { activitiesController } from "../../Services/publicActivityService";
import { sweetAlertConfirm } from "../../Services/sweetAlertServices";

const Activities = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activitiesReducer.activities);

  useEffect(() => {
    dispatch(getActivities());
  }, []); //eslint-disable-line

  // Eliminar y actualizar el estado para mostar sin el que esta eliminado
  const handleDelete = (id) => {
    sweetAlertConfirm(
      "Eliminar actividad",
      "Seguro quieres eliminar la actividad?"
    ).then((res) => {
      res && activitiesController.delete(id);
      setTimeout(() => {
        dispatch(getActivities());
      }, 2000);
    });
  };

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
                    <Link to={`/backoffice/create-activity/${activity.id}`}>
                      Editar
                    </Link>
                    <Button
                      color="error"
                      onClick={() => handleDelete(activity.id)}
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

export default Activities;
