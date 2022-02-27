import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "../../features/skeleton/Skeleton";
import Separator from "../Card/Separator";
import comentariosImg from "../../images/comentarios.jpg"

const Comments = () => {
  const [comments, setComments] = useState([]);
  const getComments = () => {
    axios
      .get("http://ongapi.alkemy.org/api/comments", {
        headers: {
          Group: 127,
        },
      })
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
      <Separator image={comentariosImg} >
      <h1>Comentarios</h1>
         </Separator>
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
