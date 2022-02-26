import { useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import {
  getActivities,
  getActivitiesSearch,
} from "../../Redux/reducers/activitiesSlice";
import { activitiesController } from "../../Services/publicActivityService";
import { sweetAlertConfirm } from "../../Services/sweetAlertServices";

const Activities = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activitiesReducer.activities);

  useEffect(() => {
    dispatch(getActivities());
  }, []); //eslint-disable-line

  // Eliminar y actualizar el estado para mostar sin el que esta eliminado
  const handleDelete = (id) => {
    sweetAlertConfirm(
      "Eliminar actividad",
      "Seguro quieres eliminar la actividad?"
    ).then((res) => {
      res && activitiesController.delete(id);
      setTimeout(() => {
        dispatch(getActivities());
      }, 2000);
    });
  };

  const handleActivitiesSearch = (e) => {
    const { value } = e.target;
    if (value.length > 2) {
      dispatch(getActivitiesSearch(value));
    } else {
      dispatch(getActivities());
    }
  };

  return (
    <div className="table">
      <div className="table__container">
        <div className="table__actions">
          <input
            type="search"
            name="search"
            onChange={(e) => handleActivitiesSearch(e)}
          />
          <Link className="table__link" to="/backoffice/activities/create">
            Crear Actividad
          </Link>
        </div>
        {!activities.length ? (
          <Spinner />
        ) : (
          <table className="table__data">
            <thead className="table__head">
              <tr className="table__row">
                <th className="table__title">Nombre</th>
                <th className="table__title">Imagen</th>
                <th className="table__title-edit">Editar</th>
                <th className="table__title-delete">Eliminar</th>
              </tr>
            </thead>
            <tbody className="table__body">
              {activities.map((activity) => (
                <tr key={activity.id} className="table__row">
                  <td className="table__cell">{activity.name}</td>
                  <td className="table__cell">
                    <img
                      src={activity.image}
                      alt={activity.name}
                      width="50px"
                    />
                  </td>
                  <td className="table__cell-edit">
                    <Link
                      className="table__edit"
                      to={`/backoffice/activities/edit/${activity.id}`}
                    >
                      Editar
                    </Link>
                  </td>
                  <td className="table__cell-delete">
                    <button
                      className="table__delete"
                      onClick={() =>
                        handleDelete(
                          activity?.id,
                          activity.name,
                          activity.image
                        )
                      }
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Activities;
