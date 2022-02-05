import { useEffect } from "react";

import "./styles.scss";

//redux
import { useDispatch, useSelector } from "react-redux";
import { fetchMembers } from "../../Redux/reducers/membersSlice";

const MemberListUs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMembers());
  }, []); //eslint-disable-line

  const { members, loading } = useSelector((state) => state.membersReducer);

  return (
    <>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="members">
          <h1>Miembros</h1>
          <div className="members__container">
            {members.map((member) => (
              <li className="members__item" key={member.id}>
                <div className="members__item__img">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="members__item__body">
                  <div>
                    <h2>{member.name}</h2>
                    <p>{member.description}</p>
                  </div>
                  <div>
                    <p>{member.facebookUrl}</p>
                    <p>{member.linkedinUrl}</p>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MemberListUs;
