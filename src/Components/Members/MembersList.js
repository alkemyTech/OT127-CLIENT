import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { sweetAlertConfirm } from "../../Services/sweetAlertServices";
import Spinner from "../Spinner/Spinner";
//redux
import { useDispatch, useSelector } from "react-redux";
import {
	fetchMembers,
	getMembersSearch,
} from "../../Redux/reducers/membersSlice";
import { deleteMember } from "../../Services/membersService";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

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

	const handleMemberSearch = (e) => {
		const { value } = e.target;
		if (value.length > 0) {
			dispatch(getMembersSearch(value));
		} else {
			dispatch(fetchMembers());
		}
	};

	return (
		<div className="table">
			<div className="table__container">
				<div className="table__actions">
					<TextField
						type="search"
						name="Buscar Miembro"
						size="small"
						label="Buscar Miembro"
						placeholder="Maria"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<span className="material-icons">
										search
									</span>
								</InputAdornment>
							),
						}}
					/>
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
										<Link to={`/backoffice/members/edit/${member.id}`}>
											Editar
										</Link>
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
};

export default MembersList;
