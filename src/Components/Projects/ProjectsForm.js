import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../FormStyles.css";

const API_URL = "http://ongapi.alkemy.org/api/projects";

const ProjectsForm = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const { title, description, image, due_date } = project;

  useEffect(() => {
    if (id) {
      axios.get(`${API_URL}/${id}`).then((res) => {
        setProject(res.data.data);
      });
    }
  }, []);

  const handleChangeTitle = (e) => {
    setProject({ ...project, title: e.target.value });
  };

  const handleChangeDescription = (e) => {
    setProject({
      ...project,
      description: e.target.value,
    });
  };

  const handleChangeImage = (e) => {
    const img = URL.createObjectURL(e.target.files[0]);

    setProject({
      ...project,
      image: img,
    });
  };

  const handleChangeDate = (e) => {
    setProject({
      ...project,
      due_date: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newDate = new Date(due_date).toISOString();
    if (id) {
      axios.put(`${API_URL}/${id}`, {
        title,
        description,
        image,
        due_date: newDate,
      }); //TODO: Controlar errores (Catch)
    } else {
      axios.post(API_URL, {
        title,
        description,
        image,
        due_date: newDate,
      }); //TODO: Controlar errores (Catch)
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
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
