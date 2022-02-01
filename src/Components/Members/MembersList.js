import React from "react";
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

const MembersList = () => {
  const membersMock = [
    {
      id: 1,
      name: "Nombre y Apellido",
      photo:
        "https://images.unsplash.com/photo-1585670210693-e7fdd16b142e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 2,
      name: "Nombre y Apellido",
      photo:
        "https://images.unsplash.com/photo-1585670210693-e7fdd16b142e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 3,
      name: "Nombre",
      photo:
        "https://images.unsplash.com/photo-1585670210693-e7fdd16b142e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 4,
      name: "Nombre",
      photo:
        "https://images.unsplash.com/photo-1585670210693-e7fdd16b142e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];

  const handleEdit = {
    // Logica a desarrollar
  };

  const handleDelete = {
    // Logica a desarrollar
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
  return (
    <Container maxWidth="md">
      <Link to="/backoffice/members/create">Create Member</Link>
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
            {membersMock.map((member) => (
              <StyledTableRow key={member.id}>
                <StyledTableCell scope="row">{member.name}</StyledTableCell>
                <StyledTableCell>
                  <img src={member.photo} alt={member.name} width="50px" />
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

export default MembersList;
