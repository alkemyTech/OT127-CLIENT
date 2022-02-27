import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import { useLocation } from "react-router-dom";
import axios from "axios";

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
    console.log("hoal");

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
        .then((response) => {
          console.log(response);
          setOrganizationData(response.data.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, []);

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

  const handleSubmit = () => {
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
      alert("Todos los campos estan bien"); // Acá va acción put por axios
      window.location.reload();
    }
  };

  return (
    <div className="form__container">
      <form className="form">
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
            onChange={(event) => handleChange(event, "logo")}
          />
        </FormControl>
        <img src={organizationData.logo} alt="" />
        <CKEditor
          editor={ClassicEditor}
          data={organizationData.short_description}
          value={organizationData.short_description}
          onChange={(event, editor) => {
            const data = editor.getData().slice(3, -4);
            setOrganizationData({
              ...organizationData,
              short_description: data,
            });
          }}
        />
        <FormControl>
          <label className="form__label" htmlFor="long_description" required>
            Long description
          </label>
          <input
            className="form__input"
            value={organizationData.long_description}
            aria-describedby="my-helper-text"
            onChange={(event) => handleChange(event, "long_description")}
          />
        </FormControl>
        <label className="form__label">Redes sociales</label>
        <FormControl>
          <label className="form__label" htmlFor="facebook">
            Facebook
          </label>
          <input
            className="form__input"
            value={organizationData.facebook_url}
            aria-describedby="my-helper-text"
            onChange={(event) => handleChange(event, "facebook")}
            onBlur={handleBlurSocials}
          />
          <FormHelperText id="my-helper-text">
            {requiredSocials.facebook_url}
          </FormHelperText>
        </FormControl>
        <FormControl>
          <label className="form__label" htmlFor="linkedin">
            Linkedin
          </label>
          <input
            className="form__input"
            value={organizationData.linkedin_url}
            aria-describedby="my-helper-text"
            onChange={(event) => handleChange(event, "linkedin")}
            onBlur={handleBlurSocials}
          />
          <FormHelperText id="my-helper-text">
            {requiredSocials.linkedin_url}
          </FormHelperText>
        </FormControl>
        <FormControl>
          <label className="form__label" htmlFor="instagram">
            Instagram
          </label>
          <input
            className="form__input"
            value={organizationData.instagram_url}
            aria-describedby="my-helper-text"
            onChange={(event) => handleChange(event, "instagram")}
            onBlur={handleBlurSocials}
          />
          <FormHelperText id="my-helper-text">
            {requiredSocials.instagram_url}
          </FormHelperText>
        </FormControl>
        <FormControl>
          <label className="form__label" htmlFor="twitter">
            Twitter
          </label>
          <input
            className="form__input"
            value={organizationData.twitter_url}
            aria-describedby="my-helper-text"
            onChange={(event) => handleChange(event, "twitter")}
            onBlur={handleBlurSocials}
          />
          <FormHelperText id="my-helper-text">
            {requiredSocials.twitter_url}
          </FormHelperText>
        </FormControl>
        <FormControl>
          <input
            className="form__button"
            id="submit"
            type="submit"
            onClick={handleSubmit}
          />
        </FormControl>
      </form>
    </div>
  );
};

export default OrganizationDataForm;
