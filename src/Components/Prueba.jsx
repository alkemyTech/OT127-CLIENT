import React from 'react';
import { useDispatch } from 'react-redux';
import { getNews } from '../features/news/newsSlice';

function Prueba() {
    const dispatch = useDispatch()
  return <div>
      <button onClick={() => dispatch(getNews())}>prueba</button>
  </div>;
}

export default Prueba;
