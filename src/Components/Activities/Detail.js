import Title from "../Titulosynovedades/Title";
import ActivitiesForm from "./ActivitiesForm";
import ActivitiesList from "./ActivitiesList"



function Detail() {

  const titleFromAPI = "Desde la API Activities"

  return (
    <div>
      <Title title={titleFromAPI}></Title>
      <ActivitiesList />
      <ActivitiesForm />
    </div>
  );
}

export default Detail;
