import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useParams } from "react-router-dom";
import { activitiesController } from "../../Services/publicActivityService";

const toDataURL = (blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });

const ActivitiesForm = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState({});
  const { name, description, image } = activity;

  useEffect(() => {
    if (id) {
      activitiesController.getById(id).then((res) => setActivity(res));
    }
  }, []); //eslint-disable-line

  const handleChangeName = (e) => {
    setActivity((prevActivity) => ({ ...prevActivity, name: e.target.value }));
  };

  const handleChangeImage = (e) => {
    const img = URL.createObjectURL(e.target.files[0]);
    activitiesController
      .changeImage(img)
      .then((response) => toDataURL(response))
      .then((encoded) => {
        setActivity((prevActivity) => ({ ...prevActivity, image: encoded }));
      });
  };

  const handleChangeDescription = (e, editor) => {
    const data = editor.getData();
    setActivity((prevActivity) => ({ ...prevActivity, description: data }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      activitiesController.put(id, name, description, image);
    } else {
      activitiesController.post(name, description, image);
    }
  };

  return (
    <div className="form__container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form__input"
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          placeholder="Activity Title"
        />
        <CKEditor
          editor={ClassicEditor}
          data={description}
          onChange={(event, editor) => handleChangeDescription(event, editor)}
        />
        <input
          className="form__input"
          type="file"
          name="file"
          accept=".png, .jpg"
          onChange={handleChangeImage}
        />
        <img src={image} alt="" />
        <button className="form__button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ActivitiesForm;
