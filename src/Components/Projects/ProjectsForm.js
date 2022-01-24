import React, { useState } from "react";
import axios from "axios";
import "../FormStyles.css";

const ProjectsForm = () => {
  const [project, setProject] = useState({});
  const { title, description, image } = project;

  const handleChangeTitle = (e) => {
    setProject((prevProject) => ({ ...prevProject, title: e.target.value }));
  };

  const handleChangeDescription = (e) => {
    setProject((prevProject) => ({
      ...prevProject,
      description: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
      ></input>

      <input
        className="input-field"
        type="text"
        name="description"
        value={description}
        onChange={handleChangeDescription}
        placeholder="Write some description"
      ></input>

      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default ProjectsForm;
