import React, { Component } from 'react';
//import { CKEditor } from '@ckeditor/ckeditor5-react';
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

//antesd de  commit cambiar de branch

const Actividad = () =>{
    
    
    function enviarDatos(){
        let texto = document.getElementById('campo').value;
        
        document.body.innerHTML = texto;
    }
    

    return(
        <>
            <div>Hola Mundo</div>

            <textarea id="campo" type="text" name="campo" cols="40" rows="3" ><input/></textarea><br/>

            <button className="submit-btn" type="submit" onClick={()=> enviarDatos()} >Render</button><br/>
            
        </>
    )
    
}


export default Actividad;