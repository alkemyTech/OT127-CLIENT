import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getCategoryByID,
  postCategory,
  putCategory,
} from "../../Services/categoriesService";
import Error from "../Error/Error";

const CategoriesForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    image: "",
  });

  const { id } = useParams();

  const send_image = (files) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        setFormValues({ ...formValues, image: fileReader.result });
      }
    };
    fileReader.readAsDataURL(files);
  };

  const getCategoryData = () => {
    if (id) {
      getCategoryByID(id).then(({ data }) => {
        const { name, description, image } = data;

        setFormValues({
          name: name,
          description: description,
        });
        send_image(image);
      });
    }
  };

  useEffect(() => {
    getCategoryData(id);
  }, []); //eslint-disable-line

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, description, image } = formValues;

    // Validaciones
    if (name === "" || description === "" || image === "") {
      setFormValues({ ...formValues, message: true });
      setTimeout(() => {
        setFormValues({ ...formValues, message: false });
      }, 1500);

      return;
    }

    if (id) {
      putCategory(id, formValues);
    } else {
      postCategory(formValues);
    }
  };

  return (
    <div className="form__container">
      <form className="form" onSubmit={handleSubmit}>
        {formValues.message ? (
          <Error>
            {id
              ? "Debe llenar todos los campos para poder editar"
              : "Todos los campos son obligatorios"}
          </Error>
        ) : null}
        <div className="form__subcontainer">
          <label className="form__label" htmlFor="name">
            Nombre:
          </label>
          <input
            className="form__input"
            type="text"
            placeholder="Nombre de la Categoría"
            id="name"
            name="name"
            value={formValues.name}
            onChange={(e) =>
              setFormValues({ ...formValues, name: e.target.value })
            }
          />
        </div>
        <div className="form__subcontainer">
          <label className="form__label" htmlFor="description">
            Descripción:
          </label>
          <input
            className="form__input"
            type="text"
            placeholder="Descripción de la Categoría"
            id="description"
            name="description"
            value={formValues.description}
            onChange={(e) =>
              setFormValues({ ...formValues, description: e.target.value })
            }
          />
        </div>

        <div className="form__subcontainer">
          <label className="form__label" htmlFor="image">
            Imagen:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/png,image/jpeg"
            onChange={(e) => {
              send_image(e.target.files[0]);
              setFormValues({
                ...formValues,
                image: (window.URL || window.webkitURL).createObjectURL(
                  e.target.files[0]
                ),
              });
            }}
          />
        </div>

        <input
          className="form__button"
          type="submit"
          value={id ? "Editar" : "Crear"}
        />
      </form>
    </div>
  );
};

export default CategoriesForm;
