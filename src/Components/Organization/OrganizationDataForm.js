import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {
  sweetAlertSuccess,
  sweetAlertError,
} from "../../Services/sweetAlertServices";

const OrganizationDataForm = () => {
  const location = useLocation();
  const [organizationData, setOrganizationData] = useState({
    name: "",
    logo: "",
    short_description: "",
    long_description: "",
    facebook_url: "",
    linkedin_url: "",
    instagram_url: "",
    twitter_url: "",
  });
  const [requiredSocials, setRequiredSocials] = useState({
    facebook: "",
    linkedin: "",
    instagram: "",
    twitter: "",
  });

  useEffect(() => {
    if (location.pathname === "/backoffice/organization/edit") {
      axios
        .get(
          `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_ORGANIZATION}`,
          {
            headers: {
              Group: 127,
            },
          }
        )
        .then(({ data }) => {
          const {
            name,
            logo,
            short_description,
            long_description,
            facebook_url,
            linkedin_url,
            instagram_url,
            twitter_url,
          } = data.data;
          setOrganizationData({
            name,
            short_description,
            long_description,
            facebook_url,
            linkedin_url,
            instagram_url,
            twitter_url,
          });
          send_image(logo);
        });
    }
  }, []);

  const send_image = (files) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        setOrganizationData({ ...organizationData, logo: fileReader.result });
      }
    };
    fileReader.readAsDataURL(files);
  };

  const handleChange = (event, name) => {
    setOrganizationData({
      ...organizationData,
      [name]: event.target.value,
    });
  };

  const handleBlurSocials = (event) => {
    let id = event.target.id;
    let regex = new RegExp(
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
    );
    let verifyUrl = event.target.value.match(regex);
    if (!verifyUrl) {
      for (const property in requiredSocials) {
        id === property &&
          setRequiredSocials({
            ...requiredSocials,
            [property]: "Tienes que ingresar una URL válida.",
          });
        id === property &&
          setOrganizationData({ ...organizationData, [property]: "" });
      }
    } else {
      for (const property in organizationData) {
        id === property &&
          setOrganizationData({
            ...organizationData,
            [property]: event.target.value,
          });
        for (const property in requiredSocials) {
          id === property &&
            setRequiredSocials({ ...requiredSocials, [property]: "" });
        }
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let emptyInputs = [];
    for (const property in organizationData) {
      !organizationData[property].length &&
        emptyInputs.push(property.charAt(0).toUpperCase() + property.slice(1));
    }
    if (emptyInputs.length) {
      alert(
        `Los campos ${emptyInputs.map(
          (element) => ` ${element}`
        )} son obligatorios.`
      );
    } else {
      axios
        .put(
          `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_ORGANIZATION}/13`,
          organizationData,
          {
            headers: {
              Group: 127,
            },
          }
        )
        .then(() => sweetAlertSuccess("Se puedo editar con éxito"))
        .catch(() => sweetAlertError("No se pudo editar la información"));
    }
  };

  return (
    <div className="form__container">
      <form className="form" onSubmit={handleSubmit}>
        <p className="form__title">Editar información general</p>
        <p className="form__subtitle">complete todos los campos</p>
        <FormControl>
          <label className="form__label" htmlFor="name" required>
            Name
          </label>
          <input
            className="form__input"
            value={organizationData.name}
            aria-describedby="my-helper-text"
            onChange={(event) => handleChange(event, "name")}
          />
        </FormControl>
        <label className="form__label">Logo</label>
        <FormControl>
          <input
            className="form__input"
            type="file"
            accept="image/x-png, image/jpeg"
            aria-describedby="my-helper-text"
            onChange={(e) => {
              send_image(e.target.files[0]);
              setOrganizationData({
                ...organizationData,
                logo: (window.URL || window.webkitURL).createObjectURL(
                  e.target.files[0]
                ),
              });
            }}
          />
        </FormControl>
        <label className="form__label" htmlFor="long_description" required>
          Descripción larga
        </label>
        <CKEditor
          editor={ClassicEditor}
          data={organizationData.long_description}
          value={organizationData.long_description}
          onChange={(event, editor) => {
            const data = editor.getData().slice(3, -4);

            setOrganizationData((prevActivity) => ({
              ...prevActivity,
              long_description: data,
            }));
          }}
        />
        <FormControl>
          <label className="form__label" htmlFor="short_description" required>
            Descripción corta
          </label>
          <input
            className="form__input"
            value={organizationData.short_description}
            aria-describedby="my-helper-text"
            onChange={(event) => handleChange(event, "short_description")}
          />
        </FormControl>
        <label className="form__label">Redes sociales</label>
        <FormControl>
          <label className="form__label" htmlFor="facebook_url">
            Facebook
          </label>
          <input
            className="form__input"
            value={organizationData.facebook_url}
            aria-describedby="my-helper-text"
            name="facebook_url"
            onChange={(event) => handleChange(event, "facebook_url")}
            onBlur={handleBlurSocials}
          />
          <FormHelperText id="my-helper-text">
            {requiredSocials.facebook_url}
          </FormHelperText>
        </FormControl>
        <FormControl>
          <label className="form__label" htmlFor="linkedin_url">
            Linkedin
          </label>
          <input
            className="form__input"
            value={organizationData.linkedin_url}
            aria-describedby="my-helper-text"
            name="linkedin_url"
            onChange={(event) => handleChange(event, "linkedin_url")}
            onBlur={handleBlurSocials}
          />
          <FormHelperText id="my-helper-text">
            {requiredSocials.linkedin_url}
          </FormHelperText>
        </FormControl>
        <FormControl>
          <label className="form__label" htmlFor="instagram_url">
            Instagram
          </label>
          <input
            className="form__input"
            value={organizationData.instagram_url}
            aria-describedby="my-helper-text"
            name="instagram_url"
            onChange={(event) => handleChange(event, "instagram_url")}
            onBlur={handleBlurSocials}
          />
          <FormHelperText id="my-helper-text">
            {requiredSocials.instagram_url}
          </FormHelperText>
        </FormControl>
        <FormControl>
          <label className="form__label" htmlFor="twitter_url">
            Twitter
          </label>
          <input
            className="form__input"
            value={organizationData.twitter_url}
            aria-describedby="my-helper-text"
            name="twitter_url"
            onChange={(event) => handleChange(event, "twitter_url")}
            onBlur={handleBlurSocials}
          />
          <FormHelperText id="my-helper-text">
            {requiredSocials.twitter_url}
          </FormHelperText>
        </FormControl>
        <input className="form__button" type="submit" value="Editar" />
      </form>
    </div>
  );
};

export default OrganizationDataForm;
