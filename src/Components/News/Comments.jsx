import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "../../features/skeleton/Skeleton";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const getComments = () => {
    axios
      .get("http://ongapi.alkemy.org/api/comments")
      .then((res) => {
        setTimeout(function () {
          setComments(res.data.data);
        }, 3000); //Seteado 3 segundos para poder ver el skeleton
      })
      .catch((error) => {
        return error;
      });
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="comments">
      <h1 className="comments__title">Comentarios</h1>
      <div className="comment__container">
        {comments.length ? (
          comments.map((comment) => {
            return (
              <div className="comments__cardcontainer" key={comment.id}>
                <img
                  className="comments__img"
                  src={comment.image}
                  alt={comment.text}
                />
                <p className="comments__text">{comment.text}</p>
              </div>
            );
          })
        ) : (
          <Skeleton mode="list" />
        )}
      </div>
    </div>
  );
};

export default Comments;
