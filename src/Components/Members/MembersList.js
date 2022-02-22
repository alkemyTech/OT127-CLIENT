<<<<<<< HEAD
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Material UI
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
import { sweetAlertConfirm } from "../../Services/sweetAlertServices";

//redux
import { useDispatch, useSelector } from "react-redux";
import { fetchMembers, getMembersSearch } from "../../Redux/reducers/membersSlice";
import { deleteMember } from "../../Services/membersService"

const MembersList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMembers());
  }, []); //eslint-disable-line

  const { members } = useSelector((state) => state.membersReducer);

  const handleDelete = (id) => {
    sweetAlertConfirm(
      "Eliminar miembro.",
      "Seguro quieres eliminar este miebro?"
    ).then((res) => {
      res && deleteMember(id);
      setTimeout(() => {
        dispatch(fetchMembers());
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
=======
import React, {useEffect} from "react";
import {Link} from "react-router-dom";

//redux
import {useDispatch, useSelector} from "react-redux";
import {fetchMembers} from "../../Redux/reducers/membersSlice";
import Spinner from "../Spinner/Spinner";

const MembersList = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchMembers());
	}, []); //eslint-disable-line

	const {members} = useSelector((state) => state.membersReducer);
>>>>>>> 2c30922d50d7f75c245229a0e5ed7c780abdddf9

	const handleEdit = (id) => {
		// Logica a desarrollar
	};

	const handleDelete = (id) => {
		// Logica a desarrollar
	};

<<<<<<< HEAD
  return (
    <Container maxWidth="md">
      <Link to="/backoffice/members/create">Create Member</Link>
      <input
        type="search"
        name="search"
        onChange={(e) => handleUserSearch(e)}
      />
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
            {members.map((member) => (
              <StyledTableRow key={member.id}>
                <StyledTableCell scope="row">{member.name}</StyledTableCell>
                <StyledTableCell>
                  <img src={member.image} alt={member.name} width="50px" />
                </StyledTableCell>
                <StyledTableCell style={{ width: "25%" }}>
                  <Link to={`/backoffice/members/edit/${member.id}`}>Editar</Link>
                  <Button color="error" onClick={() => handleDelete(member.id)}>
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
=======
	return (
		<div className="table">
			<div className="table__container">
				<div className="table__actions">
					<input type="search" />
					<Link className="table__link" to="/backoffice/members/create">
						Crear Miembros
					</Link>
				</div>
				{!members.length ? (
					<Spinner />
				) : (
					<table className="table__data">
						<thead className="table__head">
							<tr className="table__row">
								<th className="table__title">Nombre</th>
								<th className="table__title">Foto</th>
								<th className="table__title-edit">Editar</th>
								<th className="table__title-delete">Eliminar</th>
							</tr>
						</thead>
						<tbody className="table__body">
							{members.map((member) => (
								<tr key={member.id} className="table__row">
									<td className="table__cell">{member.name}</td>
									<td className="table__cell">
										<img src={member.image} alt={member.name} width="50px" />
									</td>
									<td className="table__cell-edit">
										<button
											className="table__edit"
											onClick={() => handleEdit(member.id)}
										>
											Editar
										</button>
									</td>
									<td className="table__cell-delete">
										<button
											className="table__delete"
											onClick={() => handleDelete(member.id)}
										>
											Eliminar
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
>>>>>>> 2c30922d50d7f75c245229a0e5ed7c780abdddf9
};

export default MembersList;
