import React, { useState } from "react";
import axios from "axios";
import Skeleton from "../../features/skeleton/Skeleton";

const Comments = () => {
  const [comments, setComments] = useState([]);
 
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

  return (
    <div>
    <h1>Comentarios</h1>
      {comments.length ? (
        comments.map((comment) => {
          return <p key={comment.id}>{comment.text}</p>;
        })
      ) : (
        <Skeleton mode="list" />
      )}
    </div>
  );
};

export default Comments;
