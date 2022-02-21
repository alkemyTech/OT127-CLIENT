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
    <div>
      <h1>Comentarios</h1>
      <div>
        {comments.length ? (
          comments.map((comment) => {
            return (
              <p key={comment.id}>
                <q>{comment.text}</q>
              </p>
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
