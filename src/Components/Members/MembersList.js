import React from "react";

import "./members-list.scss";

const MembersList = () => {
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
          <tr>
            <td>nombre</td>
            <td>data</td>
            <td>
              <button href="#">Editar</button>
            </td>
            <td>
              <button>Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MembersList;
