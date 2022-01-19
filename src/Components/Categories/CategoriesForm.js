import React, { useState } from 'react';
import '../FormStyles.css';

const CategoriesForm = () => {
    const [initialValues, setInitialValues] = useState({
        name: '',
        description: '',
        image: ''
    })

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        } 
        
        if(e.target.name === 'description'){
            setInitialValues({...initialValues, description: e.target.value})
        }

        if(e.target.name === 'image'){
            setInitialValues({...initialValues, image: e.target.value})
        }


    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(initialValues);
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Title"></input>
            <input className="input-field" type="text" name="description" value={initialValues.description} onChange={handleChange} placeholder="Write some description"></input>
            <input className="input-field" type="file" name='image' value={initialValues.image} onChange={handleChange}></input>
            <button className="submit-btn" type="submit" >Send</button>
        </form>
    );
}
 
export default CategoriesForm;