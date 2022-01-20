import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import '../FormStyles.css';

const CategoriesForm = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [mesagge, setMesagge] = useState("");
    
    const params = useParams()
    //console.log(Object.keys(params).length)
    

    const handleImage = e => {
        setImage(e.target.files[0])
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        
        if([name, description].includes("") || (!image)){
            setMesagge('Todos los campos son obligatorio')

            setTimeout(() => {
                setMesagge('')
            }, 3000);

            return
        }

        setName(name)
        setDescription(description)

        if(Object.keys(params).length){
            // Modifico
            console.log("Actualizando")

        }else{
            // Creo
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