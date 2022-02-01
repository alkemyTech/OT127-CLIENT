import React, { useState } from 'react';
import '../FormStyles.css';
import '../Activities/Style.scss';
import Activities from './Activities';



const ActivitiesForm = () => {
    const [initialValues, setInitialValues] = useState({
        name: '',
        description: '',
        area: ''
    });
    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        } if(e.target.name === 'description'){
            setInitialValues({...initialValues, description: e.target.value})
        } if (e.target.area === 'area')(
            setInitialValues({...initialValues, area: e.target.value})
        )
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // To do
        return initialValues;
    }

    const formattedMessage = `
        <h1> hola mensage!</h1>
        <p>esto es un parrafo Lorem.</p>
    `;
            
    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Activity Title"></input>
            <input className="input-field" type="text" name="description" value={initialValues.description} onChange={handleChange} placeholder="Write some activity description"></input>
            <textarea type="text" name="area"  defaultValue={ initialValues.area } onChange={handleChange} ></textarea>
            
            <Activities mensage={formattedMessage} />
           
            <button className="submit-btn" type="submit"  >Submit</button><br/>
        </form>
    );
}
 
export default ActivitiesForm;