import React, { useState } from "react";
import axios from "axios";
import "../FormStyles.css";

const ProjectsForm = () => {
  const [project, setProject] = useState({});
  const { title, description, image, due_date } = project;

  const handleChangeTitle = (e) => {
    setProject((prevProject) => ({ ...prevProject, title: e.target.value }));
  };

  const handleChangeDescription = (e) => {
    setProject((prevProject) => ({
      ...prevProject,
      description: e.target.value,
    }));
  };

  const handleChangeImage = (e) => {
    const img = URL.createObjectURL(e.target.files[0]);

    setProject((prevProject) => ({
      ...prevProject,
      image: img,
    }));
  };

  const handleChangeDate = (e) => {
    setProject((prevProject) => ({
      ...prevProject,
      due_date: e.target.value,
    }));
  };

  const handleSubmitCreateProject = (e) => {
    e.preventDefault();

    let newDate = new Date(due_date).toISOString();

    axios
      .post("http://ongapi.alkemy.org/api/projects", {
        title,
        description,
        image:
          "https://economipedia.com/wp-content/uploads/test-de-estr%C3%A9s.png",
        due_date: newDate,
      })
      .then((res) => console.log(res));
  };

  return (
    <form className="form-container" onSubmit={handleSubmitCreateProject}>
      <input
        className="input-field"
        type="text"
        name="title"
        value={title}
        onChange={handleChangeTitle}
        placeholder="Title"
      ></input>

      <input
        className="input-field"
        type="text"
        name="description"
        value={description}
        onChange={handleChangeDescription}
        placeholder="Write some description"
      ></input>
      <input
        type="date"
        name="trip-start"
        value={due_date}
        onChange={handleChangeDate}
      ></input>

      <input
        type="file"
        name="file"
        accept=".png, .jpg"
        onChange={handleChangeImage}
      ></input>
      <img src={image} alt="" />
      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default ProjectsForm;
