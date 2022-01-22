import React, { useState } from "react";
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

  return (
    <>
      <ActivitiesForm
        activity={activity}
        handleChange={handleChange}
        handleChangeDescription={handleChangeDescription}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default CreateEditActivities;
