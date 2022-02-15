import React, { useState } from 'react';

const TestimonialForm = () => {
    const [initialValues, setInitialValues] = useState({
        name: '',
        description: ''
    });

    const handleChange = (e) => {
        if (e.target.name === 'name') {
            setInitialValues({ ...initialValues, name: e.target.value })
        } if (e.target.name === 'description') {
            setInitialValues({ ...initialValues, description: e.target.value })
        }
    if (e.target.name === "description") {
      setInitialValues({ ...initialValues, description: e.target.value });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form__container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form__input"
          type="text"
          name="name"
          value={initialValues.name}
          onChange={handleChange}
          placeholder="Testimonial Title"
        ></input>
        <input
          className="form__input"
          type="text"
          name="description"
          value={initialValues.description}
          onChange={handleChange}
          placeholder="Testimonial description"
        ></input>
        <button className="form__button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default TestimonialForm;
