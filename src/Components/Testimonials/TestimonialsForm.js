import React, { useState } from 'react';
import '../FormStyles.css';

const TestimonialForm = () => {
    const [initialValues, setInitialValues] = useState({
       name: '',
       description: '' 
	 });
	const [ images, setImages ] = useState()
	


    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        } if(e.target.name === 'description'){
            setInitialValues({...initialValues, description: e.target.value})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(initialValues);
    }

	function onImageChange(e) {
		setImages(e.target.files)
		console.log(e.target.files);
	}

    return (
        <form className="form-container" onSubmit={handleSubmit}>
			<input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Testimonial Title"></input>
			<input className="input-field" type="text" name="description" value={initialValues.description} onChange={handleChange} placeholder="Testimonial description"></input>
			<input type="file" name="image" onChange={onImageChange} />
            <button className="submit-btn" type="submit">Send</button>
        </form>
    );
}
 
export default TestimonialForm;