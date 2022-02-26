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
  const [activity, setActivity] = useState({
    name: "",
    description: "",
    image: "",
  });

  const send_image = (files) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        setActivity({ ...activity, image: fileReader.result });
      }
    };
    fileReader.readAsDataURL(files);
  };

  const getActivityData = () => {
    if (id) {
      activitiesController.getById(id).then(({ data }) => {
        const { name, description, image } = data;
        setActivity({
          name: name,
          description: description,
        });
        send_image(image);
      });
    }
  };

  useEffect(() => {
    getActivityData();
  }, []); //eslint-disable-line

  const handleChangeName = (e) => {
    setActivity((prevActivity) => ({ ...prevActivity, name: e.target.value }));
  };

  const handleChangeDescription = (e, editor) => {
    const data = editor.getData();
    setActivity((prevActivity) => ({ ...prevActivity, description: data }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      activitiesController.put(id, activity);
    } else {
      activitiesController.post(activity);
    }
  };

  return (
    <div className="form__container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form__input"
          type="text"
          name="name"
          value={activity.name}
          onChange={handleChangeName}
          placeholder="Activity Title"
        />
        <CKEditor
          editor={ClassicEditor}
          data={activity.description}
          onChange={(event, editor) => handleChangeDescription(event, editor)}
        />
        <input
          className="form__input"
          type="file"
          name="file"
          accept=".png, .jpg"
          onChange={(e) => {
            send_image(e.target.files[0]);
            setActivity({
              ...activity,
              image: (window.URL || window.webkitURL).createObjectURL(
                e.target.files[0]
              ),
            });
          }}
        />
        <input
          className="form__button"
          type="submit"
          value={id ? "Editar" : "Crear"}
        />
      </form>
    </div>
  );
};

export default ActivitiesForm;
