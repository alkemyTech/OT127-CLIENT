import React, { useState } from 'react';
import '../FormStyles.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//- useparams => react-router-doom => para pasar datos entre componentes




const CategoriesForm = () => {
    const [initialValues, setInitialValues] = useState({
        name: '',
        description: '',
        category: ''
    })
   

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        } if(e.target.name === 'description'){
            setInitialValues({...initialValues, description: e.target.value})
        } if(e.target.name === 'category'){
            setInitialValues({...initialValues, category: e.target.value})
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
            <select className="-field" name="category" value={initialValues.category || ''} onChange={handleChange}>
                <option value="" disabled>Select category</option>
                <option value="1">Demo option 1</option>
                <option value="2">Demo option 2</option>
                <option value="3">Demo option 3</option>
            </select>
            
            <CKEditor
                editor={ ClassicEditor }
                data="<p>Hello from CKEditor 5!</p>"
                onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    console.log( { event, editor, data } );
                    
                } }
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                } }
            />
            
            <button className="submit-btn" type="submit">Send</button>
        </form>
    );
}
 

export default CategoriesForm;