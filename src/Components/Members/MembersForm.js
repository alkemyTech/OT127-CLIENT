import React, { useState } from 'react';
import '../FormStyles.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Formik, Field, Form } from 'formik';

import "../Members/Members.scss";


const MembersForm = () => {
  const [initialValues, setInitialValues] = useState({
    name: '',
    description: ''
  })

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
  

  let theEditor;

    ClassicEditor
      .create(document.querySelector('#agenda_mesyuarat'))
      .then(editor => {
        theEditor = editor;

      })
      .catch(error => {
        console.error(error);
      });


    function getDataFromTheEditor() {
      return theEditor.getData();
    }
    
    function send_1() {
      var testing = "<p><strong>Tilte</strong></p><p><i>123</i></p>";
      theEditor.setData(testing);
    }

  return (
    <>
      <Formik
        id='formulario'
        className='bgImage'
        initialValues={{ name: "", description: ""}}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}>
        <div className='formWrap'>
          <Form className='required_notification'>
            <div>
              <Field name="name" type="text" />
            </div>
            <div>
              <CKEditor
                editor={ ClassicEditor }
                data="<p>Hello from CKEditor 5!</p>"
                className="input-field"
                name="description"
                onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }

              />
            </div>
            <div className='submit'>
              <button type='submit' className='submit' >Submit</button>
            </div>
          </Form>
        </div>
      </Formik>
    </>
  );
}
 
export default MembersForm;