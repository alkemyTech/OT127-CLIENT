import React, { useEffect, useState } from "react"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useFormik } from "formik"

import "../FormStyles.css"

const TestimonialForm = () => {
	// const id = useParams().id
	const id = 78
	const url = "http://ongapi.alkemy.org/api/testimonials/"
	const [ testimonial, setTestimonial ] = useState({})
	const [ initialValues, setInitialValues ] = useState({
		name: "",
		description: ""
	})
	const [ image, setImage ] = useState()

	const handleChange = (e) => {
		if (e.target.name === "name") {
			setInitialValues({ ...initialValues, name: e.target.value })
		}
		if (e.target.name === "description") {
			setInitialValues({ ...initialValues, description: e.target.value })
		}
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(initialValues)
	}
	const onImageChange = (e) => {
		setImage(e.target.files)
		console.log(e.target.files)
	}
	//----------------------//
	// const formik = useFormik({
	// 	initialValues: {
	// 		name: "",
	// 		description: "",
	// 		imagen: ""
	// 	},
	// 	validate: (values) => {
	// 		const errors = {};
	// 		if (!values.email) {
	// 			errors.name = "El campo no puede estar vacio";
	// 		} else if (!values.password) {
	// 			errors.description = "El campo no puede estar vacio";
	// 		}
	// 		return errors;
	// 	},
	// 	onSubmit: () => {
	// 		if (!formik.isValid) {
	// 			return
	// 		}
	// 	},
	// })
	//-----------------------//
	useEffect(() => {
		if (id){
			axios
				.get(`${url}${id}`)
				.then((res) => {
					setTestimonial(res.data.data)
					console.log("asd data", res.data.data);
					setInitialValues({
						name: res.data.data.name,
						description: res.data.data.description,
					})
					setImage(res.data.data.image)

				})
				.catch((err) => {
					console.log(err)
				})
		} else {
		
		}
	}, [])
	const createUpdateTestimonial = (id) => {
		if (id === undefined) {
			//crear--testimonial
		} else {
			//actualizar--testimonial(id)-rellenar campos para editar y despues enviar
		}
	}

	return (
		<form className="form-container" onSubmit={handleSubmit}>
			<input
				className="input-field"
				type="text"
				name="name"
				value={initialValues.name}
				onChange={handleChange}
				placeholder={initialValues.name}
			></input>
			<input type="file" name="image" onChange={onImageChange} />
			<input
				type="text"
				name="imagefield"
				value={image}
				placeholder={image}
				className="input-field"
			></input>
			<CKEditor
				editor={ClassicEditor}
				data={initialValues.description}
				onReady={(editor) => {
					// You can store the "editor" and use when it is needed.
					console.log("Editor is ready to use!", editor)
				}}
				// 	onChange={(event, editor) => {
				// 		const data = editor.getData()
				// 		console.log({ event, editor, data })
				// 	}}
				// 	onBlur={(event, editor) => {
				// 		console.log("Blur.", editor)
				// 	}}
				// 	onFocus={(event, editor) => {
				// 		console.log("Focus.", editor)
				// 	}}
			/>
			<button className="submit-btn" type="submit" onClick="">
				Send
			</button>
		</form>
	)
}
export default TestimonialForm
