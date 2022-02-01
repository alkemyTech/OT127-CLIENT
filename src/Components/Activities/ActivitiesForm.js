import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useParams } from "react-router-dom";
import "../FormStyles.css";
import axios from "axios";

const toDataURL = (blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });

const API_URL = "http://ongapi.alkemy.org/api/activities";

const ActivitiesForm = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState({});
  const { name, description, image } = activity;

  useEffect(() => {
    if (id) {
      axios.get(`${API_URL}/${id}`).then((res) => {
        setActivity(res.data.data);
      });
    }
  }, []); //eslint-disable-line

  const handleChangeName = (e) => {
    setActivity((prevActivity) => ({ ...prevActivity, name: e.target.value }));
  };

  const handleChangeImage = (e) => {
    const img = URL.createObjectURL(e.target.files[0]);
    axios
      .get(img, { responseType: "blob" })
      .then((response) => toDataURL(response.data))
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
      axios.put(`${API_URL}/${id}`, {
        name,
        description,
        image,
      }); //TODO: Controlar errores (Catch)
    } else {
      axios.post(API_URL, {
        name,
        description,
        image,
      }); //TODO: Controlar errores (Catch)
    }
  };

  return (
    <div className="body">
    <form className="body__form" onSubmit={handleSubmit}>
      <input
        className="body__form--input"
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
        className="body__form--input"
        type="file"
        name="file"
        accept=".png, .jpg"
        onChange={handleChangeImage}
      />
      <img src={image} alt="" />
      <button className="body__form--submit" type="submit">
        Send
      </button>
    </form>
    </div>
  );
};

export default ActivitiesForm;
