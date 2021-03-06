import Title from "../Titulosynovedades/Title";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import { sweetAlertError } from "../../Services/sweetAlertServices";

// ! Va en el Front si queda tiempo generar el detalle de activida(donde se muestra una sola actividad)

const ActivitiesList = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "http://ongapi.alkemy.org/api/activities";
  const history = useHistory();
  const isLogged = useSelector((state) => state.authReducer.userIsLogged);

  const getActivities = () => {
    setLoading(true);
    axios
      .get(url,{
        headers: {
          Group: 127,
        },
      })
      .then(({ data }) => {
        setActivities(data);
        setLoading(false);
      })
      .catch((err) => {
        sweetAlertError();
        return err;
      });
  };

  useEffect(() => {
    if (!isLogged) {
      history.push("/login");
    }
    getActivities();
  }, []); //eslint-disable-line

  return (
    <div className="activitites">
      <Title title="Actividades" />
      <ul className="activities__ul">
        {loading ? (
          <Spinner />
        ) : (
          activities.data.map(({ id, name, description, image }) => (
            <li key={id}>
              <div className="activities__container">
                <div className="activities__body">
                  <div className="activities__body-title">
                    <h2>{name}</h2>
                  </div>
                  <div className="activities__body-p">{description}</div>
                </div>
                <div className="activities__image">
                  <img src={image} alt={name} />
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
export default ActivitiesList;
