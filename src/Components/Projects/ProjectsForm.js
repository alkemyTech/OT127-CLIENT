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
    getProjectByID(id);
  }, []); //eslint-disable-line

  function getProjectByID(id) {
    if (id) {
      axios.get(`${API_URL}/${id}`).then((res) => {
        setProject(res.data.data);
      });
    }
  }

  const handleChange = (e, property) => {
    if (e.target.name === "image") {
      const img = URL.createObjectURL(e.target.files[0]);
      setProject({ ...project, [property]: img });
    } else {
      setProject({ ...project, [property]: e.target.value });
    }
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
        onChange={(e) => handleChange(e, "title")}
        placeholder="Title"
        required
      ></input>
      <input
        className="input-field"
        type="text"
        name="description"
        value={description}
        onChange={(e) => handleChange(e, "description")}
        placeholder="Write some description"
        required
      ></input>
      <input
        type="date"
        name="due_date"
        value={due_date && due_date.split("T")[0]}
        onChange={(e) => handleChange(e, "due_date")}
      ></input>
      <input
        type="file"
        name="image"
        accept=".png, .jpg"
        onChange={(e) => handleChange(e, "image")}
      ></input>
      <img src={image} alt="" />
      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default ProjectsForm;
