import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "../../features/skeleton/Skeleton";
import quoteMark from "../../images/quote-mark.png";

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
    <div className="comments">
      <h1 className="comments__title">Comentarios</h1>
      <div className="comments__container">
        {comments.length ? (
          comments.map((comment) => {
            return (
              <>
                <div className="comments__cardcontainer" key={comment.id}>
                  <div>
                    <img
                      className="comments__img"
                      src={comment.image}
                      alt={comment.text}
                    />
                    <p className="comments__text">{comment.text}</p>
                  </div>
                  <img
                    src={quoteMark}
                    alt="quotemark"
                    className="comments__quotemark"
                  />
                </div>
              </>
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
