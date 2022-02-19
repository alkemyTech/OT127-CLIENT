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

	const handleEdit = (id) => {
		// Logica a desarrollar
	};

	const handleDelete = (id) => {
		// Logica a desarrollar
	};

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
};

export default MembersList;
