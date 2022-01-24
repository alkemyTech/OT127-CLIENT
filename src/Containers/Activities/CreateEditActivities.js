import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ActivitiesForm from "../../Components/Activities/ActivitiesForm";
import axios from "axios";

const toDataURL = (blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });

const CreateEditActivities = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState({});
  const { name, description, image } = activity;

  useEffect(() => {
    axios.get(`http://ongapi.alkemy.org/api/activities/${id}`).then((res) => {
      setActivity(res.data.data);
    });
  }, [id]);

  const handleChangeName = (e) => {
    setActivity((prevActivity) => ({ ...prevActivity, name: e.target.value }));
  };

  const handleChangeImage = (e) => {
    const img = URL.createObjectURL(e.target.files[0]);
    axios
      .get(img, { responseType: "blob" })
      .then((response) => toDataURL(response.data))
      .then((encoded) => {
        setActivity((prevActivity) => ({ ...prevActivity, image: encoded }));
      });
  };

  const handleChangeDescription = (e, editor) => {
    const data = editor.getData();
    setActivity((prevActivity) => ({ ...prevActivity, description: data }));
  };

  const handleSubmitCreateActivity = (e) => {
    e.preventDefault();
    axios.post("http://ongapi.alkemy.org/api/activities", {
      name,
      description,
      image,
    }); //TODO: Controlar errores (Catch)
  };

  const handleSubmitUpdateActivity = (e) => {
    e.preventDefault();
    axios.put(`http://ongapi.alkemy.org/api/activities/${id}`, {
      name,
      description,
      image,
    }); //TODO: Controlar errores (Catch)
  };

  return (
    <>
      <ActivitiesForm
        activity={activity}
        handleChangeName={handleChangeName}
        handleChangeImage={handleChangeImage}
        handleChangeDescription={handleChangeDescription}
        handleSubmit={
          id ? handleSubmitUpdateActivity : handleSubmitCreateActivity
        }
      />
    </>
  );
};

export default CreateEditActivities;
