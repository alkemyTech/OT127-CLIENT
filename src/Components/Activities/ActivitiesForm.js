import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../FormStyles.css";
import axios from "axios";

const toDataURL = (url) =>
  fetch(url)
    .then((response) => response.blob())
    .then(
      (blob) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
    );

const ActivitiesForm = () => {
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

    toDataURL(image).then((dataUrl) => {
      axios.post("http://ongapi.alkemy.org/api/activities", {
        name,
        description,
        image: dataUrl,
      });
    });
  };

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
      <img src={image} alt="" />
      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default ActivitiesForm;
