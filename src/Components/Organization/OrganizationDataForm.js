import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";

const OrganizationDataForm = () => {
  const [organizationData, setOrganizationData] = useState({
    name: "",
    logo: "",
    shortDescription: "",
    longDescription: "",
    facebook: "",
    linkedin: "",
    instagram: "",
    twitter: "",
  });
  const [requiredSocials, setRequiredSocials] = useState({
    facebook: "",
    linkedin: "",
    instagram: "",
    twitter: "",
  });

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
    <div>
      <FormControl>
        <InputLabel htmlFor="name" required>
          Name
        </InputLabel>
        <Input
          value={organizationData.name}
          aria-describedby="my-helper-text"
          onChange={(event) => handleChange(event, "name")}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="logo" required>
          Logo
        </InputLabel>
        <Input
          value={organizationData.logo}
          type="file"
          accept="image/x-png, image/jpeg"
          aria-describedby="my-helper-text"
          onChange={(event) => handleChange(event, "logo")}
        />
      </FormControl>
      <CKEditor
        editor={ClassicEditor}
        data={null}
        value={organizationData.shortDescription}
        onChange={(event, editor) => {
          const data = editor.getData().slice(3, -4);
          setOrganizationData({ ...organizationData, shortDescription: data });
        }}
      />
      <FormControl>
        <InputLabel htmlFor="longDescription" required>
          Long description
        </InputLabel>
        <Input
          value={organizationData.longDescription}
          aria-describedby="my-helper-text"
          onChange={(event) => handleChange(event, "longDescription")}
        />
      </FormControl>
      <FormLabel>Redes sociales</FormLabel>
      <FormControl>
        <InputLabel htmlFor="facebook">Facebook</InputLabel>
        <Input
          value={organizationData.facebook}
          aria-describedby="my-helper-text"
          onChange={(event) => handleChange(event, "facebook")}
          onBlur={handleBlurSocials}
        />
        <FormHelperText id="my-helper-text">
          {requiredSocials.facebook}
        </FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="linkedin">Linkedin</InputLabel>
        <Input
          value={organizationData.linkedin}
          aria-describedby="my-helper-text"
          onChange={(event) => handleChange(event, "linkedin")}
          onBlur={handleBlurSocials}
        />
        <FormHelperText id="my-helper-text">
          {requiredSocials.linkedin}
        </FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="instagram">Instagram</InputLabel>
        <Input
          value={organizationData.instagram}
          aria-describedby="my-helper-text"
          onChange={(event) => handleChange(event, "instagram")}
          onBlur={handleBlurSocials}
        />
        <FormHelperText id="my-helper-text">
          {requiredSocials.instagram}
        </FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="twitter">Twitter</InputLabel>
        <Input
          value={organizationData.twitter}
          aria-describedby="my-helper-text"
          onChange={(event) => handleChange(event, "twitter")}
          onBlur={handleBlurSocials}
        />
        <FormHelperText id="my-helper-text">
          {requiredSocials.twitter}
        </FormHelperText>
      </FormControl>
      <FormControl>
        <Input id="submit" type="submit" onClick={handleSubmit} />
      </FormControl>
    </div>
  );
};

export default OrganizationDataForm;
