import React, { useState } from "react";
import "../../Components/FormStyles.css";

const NewsForm = () => {
  const [initialValues, setInitialValues] = useState({
    title: "",
    content: "",
    category: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setInitialValues({ ...initialValues, title: e.target.value });
    }
    if (e.target.name === "content") {
      setInitialValues({ ...initialValues, content: e.target.value });
    }
    if (e.target.name === "category") {
      setInitialValues({ ...initialValues, category: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(initialValues);
  };

  return (
    <div className="form__container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form__input"
          type="text"
          name="title"
          value={initialValues.title || ""}
          onChange={handleChange}
          placeholder="Title"
        ></input>
        <input
          className="form__input"
          type="text"
          name="content"
          value={initialValues.content || ""}
          onChange={handleChange}
          placeholder="Content"
        ></input>
        <select
          className="form__input"
          name="category"
          value={initialValues.category || ""}
          onChange={handleChange}
        >
          <option className="form__option" value="" disabled>
            Select category
          </option>
          <option className="form__option" value="1">Demo option 1</option>
          <option className="form__option" value="2">Demo option 2</option>
          <option className="form__option" value="3">Demo option 3</option>
        </select>
        <button className="form__button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default NewsForm;
