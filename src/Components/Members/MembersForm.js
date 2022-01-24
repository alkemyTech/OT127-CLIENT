import React, { useState } from 'react';
import '../FormStyles.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Formik, Field, Form } from 'formik';


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
  
  //CKeditor
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

      {/*<form className="form-container" onSubmit={handleSubmit}>
        <input 
          className="input-field" 
          type="text" 
          name="name" 
          value={initialValues.name} 
          onChange={handleChange} 
          placeholder="Name">
        </input>
        
        <CKEditor
          editor={ ClassicEditor }
          data="<p>Hello from CKEditor 5!</p>"
          className="input-field"
          name="description"
          value={initialValues.description}
          onReady={ editor => {
              // You can store the "editor" and use when it is needed.
              console.log( 'Editor is ready to use!', editor );
          } }

          onChange={ ( handleChange, editor ) => {
            const data = editor.getData();
            console.log( { handleChange, editor, data } );
              
          } }
          //onChange={handleChange}
          onBlur={ ( event, editor ) => {
              console.log( 'Blur.', editor );
          } }
          onFocus={ ( event, editor ) => {
              console.log( 'Focus.', editor );
          } }
        />
        

        <textarea class="form-control" name="agenda_mesyuarat" id="agenda_mesyuarat" value="" title="Agenda Mesyuarat"></textarea>
        <button className="submit-btn" type="submit">Send</button>
        </form>*/}

      <Formik
        initialValues={{ name: "", description: ""}}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}>
        
        <Form>
          <Field name="name" type="text" />
         
          {/*<Field name="description" type="text" />*/}

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

          <button type='submit' >Submit</button>
        </Form>
      
      </Formik>
    </>
    

  );
}
 
export default MembersForm;