import React, { useEffect } from 'react';
import '../../sass/components/_card.scss';
import { getActivities } from '../../Redux/reducers/activitySlice';
import { useSelector, useDispatch } from 'react-redux';

const ActivitiesList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getActivities());
    }, []);

    const newsActivity = useSelector(state => state.newReducer.newsActivity.data);
    console.log(newsActivity);
    // const activitiesMock = [
    //     { id: 2, name: 'Titulo de prueba', description: 'Descripcion de prueba' },
    //     { id: 1, name: 'Titulo de prueba', description: 'Descripcion de prueba' },
    //     { id: 3, name: 'Titulo de prueba', description: 'Descripcion de prueba' }
    // ];

    return (
        <div>
            <h1>Listado Actividades</h1>
            <ul className="list-container">
                {newsActivity.length > 0 ?
                    newsActivity.map((activity) => {
                        return (
                            <li className="card-info" key={activity.id}>
                                <h3>{activity.name}</h3>
                                <p>{activity.description}</p>
                            </li>
                        )
                    })
                    :
                    <p>No hay actividades</p>
                }
            </ul>
        </div>
    );
}

export default ActivitiesList;