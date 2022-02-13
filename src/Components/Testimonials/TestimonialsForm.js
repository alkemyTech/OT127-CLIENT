import React, { useState } from 'react';
import '../../sass/components/_form.scss';

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
    <div className="body">
      <form className="body__form" onSubmit={handleSubmit}>
        <input
          className="body__form--input"
          type="text"
          name="name"
          value={initialValues.name}
          onChange={handleChange}
          placeholder="Testimonial Title"
        ></input>
        <input
          className="body__form--input"
          type="text"
          name="description"
          value={initialValues.description}
          onChange={handleChange}
          placeholder="Testimonial description"
        ></input>
        <button className="body__form--submit" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default TestimonialForm;
