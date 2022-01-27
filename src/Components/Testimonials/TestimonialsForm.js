import React, { useEffect, useState } from "react"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useFormik } from "formik"

import "../FormStyles.css"

const TestimonialForm = () => {
	const id = useParams().id
	const url = "http://ongapi.alkemy.org/api/testimonials/"
	const [ testimonial, setTestimonial ] = useState({})
	const [ initialValues, setInitialValues ] = useState({
		name: "",
		description: "",
		image:""
	})
	const [ image, setImage ] = useState()
	const handleChange = (e) => {
		if (e.target.name === "name") {
			setInitialValues({ ...initialValues, name: e.target.value })
		}
		if (e.target.name === "description") {
			setInitialValues({ ...initialValues, description: e.target.value })
		}
		if (e.target.name === "imagefield") {
			setInitialValues({ ...initialValues, image: e.target.value })
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
	const formik = useFormik({
		initialValues: {
			name: "",
			description: "",
			image: ""
		},
		validate: (initialValues) => {
			const errors = {};
			if (!initialValues.name) {
				errors.name = "El campo no puede estar vacio"
			} else if (!initialValues.description) {
				errors.description = "El campo no puede estar vacio"
			} else if (!initialValues.image) {
				errors.image = "El campo no puede estar vacio"
			}
			return errors;
		},
		onSubmit: () => {
			if (!formik.isValid) {
				return
			}else{

			}
		},
	})
	//-----------------------//
	const updateTestimonial = (id) => {
				axios
					.get(`${url}${id}`)
					.then((res) => {
						setTestimonial(res.data.data)
						setInitialValues({
							name: res.data.data.name,
							description: res.data.data.description,
							image: res.data.data.image
						})
					})
					.catch((err) => {
						console.log(err)
					})
			}
	const createTestimonial =()=>{

	}

	useEffect((id) => {
		if (id === undefined) {
			//crear--testimonial
		} else {
			//actualizar--testimonial(id)-rellenar campos para editar y despues enviar
			updateTestimonial(id)
		}
	}, [id])
	return (
		<form className="form-container" onSubmit={handleSubmit}>
			<input
				className="input-field"
				type="text"
				name="name"
				value={formik.initialValues.name}
				onChange={handleChange}
				placeholder={initialValues.name}
			></input>
			{formik.errors.name ? <div>{formik.errors.name}</div> : null}
			<input type="file" name="image" onChange={onImageChange} />
			<input
				type="text"
				name="imagefield"
				value={initialValues.image}
				placeholder={initialValues.image}
				className="input-field"
				onChange={handleChange}
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
			<button className="submit-btn" type="submit" onClick={handleSubmit}>
				Send
			</button>
		</form>
	)
}
export default TestimonialForm
