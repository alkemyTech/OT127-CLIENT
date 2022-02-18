
import React, { useEffect } from 'react';
import '../../sass/components/_card.scss';
import { getActivities } from '../../Redux/reducers/activitySlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

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

const ActivitiesList  = () => {

    const dispatch = useDispatch();
  const activities = useSelector(state => state.activityReducer.activities.data)

  useEffect(() => {
    dispatch(getActivities())
  }, [])
  


  const handleEdit = {
    // Logica a desarrollar
  };

  const handleDelete = {
    // Logica a desarrollar
  };

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
  return (
    <Container maxWidth="md">
      <Link to="/backoffice/activities/create">Create Activity</Link>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Photo</StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activities.map((category) => (
              <StyledTableRow key={category.id}>
                <StyledTableCell scope="row">{category.name}</StyledTableCell>
                <StyledTableCell>
                  <img src={category.photo} alt={category.name} width="50px" />
                </StyledTableCell>
                <StyledTableCell style={{ width: "25%" }}>
                  <Button color="success" onClick={handleEdit}>
                    Editar
                  </Button>{" "}
                  <Button color="error" onClick={handleDelete}>
                    Eliminar
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ActivitiesList ;
