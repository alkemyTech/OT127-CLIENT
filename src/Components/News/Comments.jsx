import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from '../../features/skeleton/Skeleton';

const Commentaries = () => {
    const [comments, setComments] = useState([])
    useEffect(() => {
      axios.get('http://ongapi.alkemy.org/api/comments')
      .then(res => {
        setTimeout(function(){
          setComments(res.data.data)
      }, 3000);
      })
      .catch((error) => {
          return error
      })
    }, []);
    
  return <div>
      {comments.length?
        comments.map(comment => {return (
        <p key={comment.id}>{comment.text}</p>
      )
      })
      :
      <Skeleton mode='list'/>
      }
  </div>;
}

export default Commentaries;
