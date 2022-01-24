import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../FormStyles.css";

const ProjectsForm = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const { title, description, image, due_date } = project;

  useEffect(() => {
    axios.get(`http://ongapi.alkemy.org/api/projects/${id}`).then((res) => {
      setProject(res.data.data);
    });
  }, [id]);

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
        image,
        due_date: newDate,
      })
      .then((res) => console.log(res));
  };

  const handleSubmitUpdateProject = (e) => {
    e.preventDefault();
    let newDate = new Date(due_date).toISOString();
    axios
      .put(`http://ongapi.alkemy.org/api/projects/${id}`, {
        title,
        description,
        image,
        due_date: newDate,
      })
      .then((res) => console.log(res));
  };

  return (
    <form
      className="form-container"
      onSubmit={id ? handleSubmitUpdateProject : handleSubmitCreateProject}
    >
      <input
        className="input-field"
        type="text"
        name="title"
        value={title}
        onChange={handleChangeTitle}
        placeholder="Title"
        required
      ></input>
      <input
        className="input-field"
        type="text"
        name="description"
        value={description}
        onChange={handleChangeDescription}
        placeholder="Write some description"
        required
      ></input>
      <input
        type="date"
        name="trip-start"
        value={due_date && due_date.split("T")[0]}
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
