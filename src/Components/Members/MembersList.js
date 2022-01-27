import React from "react";

import "./members-list.scss";

const MembersList = () => {
  const membersMock = [
    {
      id: 1,
      name: "Nombre",
      photo:
        "https://images.unsplash.com/photo-1585670210693-e7fdd16b142e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 2,
      name: "Nombre",
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

  return (
    <div className=" container datagrid">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Photo</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {membersMock.map((member) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>
                <img src={member.photo} alt={member.photo} width="50px" />
              </td>
              <td>
                <button>Eliminar</button>
              </td>
              <td>
                <button href="#">Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MembersList;
