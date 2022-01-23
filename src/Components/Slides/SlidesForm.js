import React, { useState } from "react";
import "../FormStyles.css";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-build-classic/build/translations/es";

const SlidesForm = () => {
  const [slidesData, setSlidesData] = useState({
    name: "",
    description: "",
    order: "",
    image: "",
  });

  const { name, description, order, image } = slidesData;

  const handleChange = (e) => {
    // if (e.target.name === "name") {
    //   setInitialValues({ ...initialValues, name: e.target.value });
    // }
    // if (e.target.name === "description") {
    //   setInitialValues({ ...initialValues, description: e.target.value });
    // }
  };
  const handleDescriptionState = (event, editor) => {
    const data = editor.getData();
    setSlidesData({ ...slidesData, description: data });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(slidesData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Slide Title"
      ></input>
      <CKEditor
        id="description"
        config={{
          language: "es",
        }}
        data={description}
        editor={ClassicEditor}
        onChange={handleDescriptionState}
      />
      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default SlidesForm;
