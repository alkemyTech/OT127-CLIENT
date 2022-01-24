import React from "react";
import "../CardListStyles.css";

const NewsList = (news) => {
  return (
    <div>
      <ul className="list-container">
        {news.length > 0 ? (
          news.map((element) => {
            return (
              <li className="card-info" key={element.id}>
                <h3>{element.name}</h3>
                <p>{element.description}</p>
              </li>
            );
          })
        ) : (
          <p>No hay novedades</p>
        )}
      </ul>
    </div>
  );
};

export default NewsList;
