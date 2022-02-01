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
    <div className="body">
      <form className="body__form" onSubmit={handleSubmit}>
        <input
          className="body__form--input"
          type="text"
          name="title"
          value={initialValues.title || ""}
          onChange={handleChange}
          placeholder="Title"
        ></input>
        <input
          className="body__form--input"
          type="text"
          name="content"
          value={initialValues.content || ""}
          onChange={handleChange}
          placeholder="Content"
        ></input>
        <select
          className="body__form--input"
          name="category"
          value={initialValues.category || ""}
          onChange={handleChange}
        >
          <option className="body__form--option" value="" disabled>
            Select category
          </option>
          <option className="body__form--option" value="1">Demo option 1</option>
          <option className="body__form--option" value="2">Demo option 2</option>
          <option className="body__form--option" value="3">Demo option 3</option>
        </select>
        <button className="body__form--submit" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default NewsForm;
