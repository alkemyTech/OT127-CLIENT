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
  console.log(id);
  const [activity, setActivity] = useState();
  const { name, description, image } = activity ? activity : {};

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setActivity({ ...activity, name: e.target.value });
    }
    if (e.target.name === "file") {
      setActivity({
        ...activity,
        image: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleChangeDescription = (e, editor) => {
    if (e.name === "change:data") {
      const data = editor.getData();
      setActivity({ ...activity, description: data });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(image, { responseType: "blob" })
      .then((response) => toDataURL(response.data))
      .then((encoded) => {
        axios.post("http://ongapi.alkemy.org/api/activities", {
          name,
          description,
          image: encoded,
        });
      });
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();

    axios
      .put("http://ongapi.alkemy.org/api/activities/1119", {
        name,
        description,
        image,
      })
      .then((res) => console.log(res));
  };

  useEffect(() => {
    axios.get(`http://ongapi.alkemy.org/api/activities/${id}`).then((res) => {
      const activity = res.data.data;
      setActivity(activity);
    });
  }, [id]);

  return (
    <>
      <ActivitiesForm
        activity={activity}
        handleChange={handleChange}
        handleChangeDescription={handleChangeDescription}
        handleSubmit={id ? handleSubmitUpdate : handleSubmit}
      />
    </>
  );
};

export default CreateEditActivities;
