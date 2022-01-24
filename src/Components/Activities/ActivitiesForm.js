import React, { useState } from 'react';
import '../FormStyles.css';

const ActivitiesForm = () => {
    const [initialValues, setInitialValues] = useState({
        name: '',
        description: ''
    });

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

    //renderHTML
    function enviarDatos(){
        let texto = document.getElementById('campo').value;    
        document.body.innerHTML = texto;
    }

    
    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Activity Title"></input>
            <input className="input-field" type="text" name="description" value={initialValues.description} onChange={handleChange} placeholder="Write some activity description"></input>
            <textarea id="campo" type="text" name="campo" cols="40" rows="3" ><input/></textarea><br/>
            <button className="submit-btn" type="submit" onClick={()=> enviarDatos()} >Render</button><br/>
        </form>
    );
}
 
export default ActivitiesForm;