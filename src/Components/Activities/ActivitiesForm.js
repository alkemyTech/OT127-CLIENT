import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../FormStyles.css";

const ActivitiesForm = () => {
  const [activity, setActivity] = useState({
    name: "",
    description: "",
    image: "",
  });

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
    console.log(activity);
  };

  const { name, description, image } = activity;

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Activity Title"
      ></input>
      <CKEditor
        editor={ClassicEditor}
        data={description}
        onChange={(event, editor) => handleChangeDescription(event, editor)}
      />
      <input
        type="file"
        name="file"
        accept=".png, .jpg"
        onChange={handleChange}
      />
      <img src={image} alt="" srcset="" />
      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default ActivitiesForm;
