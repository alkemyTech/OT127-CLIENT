import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import '../FormStyles.css'

const TestimonialForm = () => {
	const id = useParams().id
	const url = "http://ongapi.alkemy.org/api/testimonials/"
	const [ initialValues, setInitialValues ] = useState({
		name: '',
		description: ''
	});
	const [ image, setImage ] = useState()
	const handleChange = (e) => {
		if (e.target.name === 'name') {
			setInitialValues({ ...initialValues, name: e.target.value })
		} if (e.target.name === 'description') {
			setInitialValues({ ...initialValues, description: e.target.value })
		}
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(initialValues)
	}
	const onImageChange = (e) => {
		setImage(e.target.files)
		console.log(e.target.files)
	}
	const editUpdate =(id)=>{
	if (id === undefined) {
		//create--testimonial
	}else{
		//update--testimonial(id)-rellenar campos para editar y despues enviar
		axios.get(url`/${id}`)
		.then(res => {
		setInitialValues({
			name: res.data.name,
			description: res.data.description
		})
	}	
	}
	}

	return (
		<form className="form-container" onSubmit={handleSubmit}>
			<input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Testimonial Title"></input>
			<input type="file" name="image" onChange={onImageChange} />
			<CKEditor
				editor={ClassicEditor}
				data="<p>Testimonial</p>"
				onReady={editor => {
					// You can store the "editor" and use when it is needed.
					console.log('Editor is ready to use!', editor);
				}}
				onChange={(event, editor) => {
					const data = editor.getData();
					console.log({ event, editor, data });
				}}
				onBlur={(event, editor) => {
					console.log('Blur.', editor);
				}}
				onFocus={(event, editor) => {
					console.log('Focus.', editor);
				}}
			/>
			<button className="submit-btn" type="submit">Send</button>
		</form>
	);
}
export default TestimonialForm