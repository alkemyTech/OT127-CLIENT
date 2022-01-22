import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'


const CategoriesForm = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    
    const location = useLocation()

    

    const handleImage = e => {
        setImage(URL.createObjectURL(e.currentTarget.files[0]))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        


        if(Object.keys(location).length){
            // Modifico
            // path
            console.log("Actualizando")

        }else{
            // Creo
            // post
            console.log("Creando")
        }

    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            {mesagge && <p>{mesagge}</p>}
            <input className="input-field" type="text" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Title"></input>
            <input className="input-field" type="text" name="description" value={description} onChange={e => setDescription(e.target.value)} placeholder="Write some description"></input>
            <input className="input-field" type="file" name='image'  onChange={handleImage}></input>
            <input className="submit-btn" type="submit" value={(Object.keys(params).length) ? "Edit" : "Add"}></input>
        </form>
    );
}
 
export default CategoriesForm;