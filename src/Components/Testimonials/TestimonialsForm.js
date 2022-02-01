import React, { useEffect, useState } from "react"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useFormik } from "formik"

import "../FormStyles.css"
import "./styles.scss"





const TestimonialForm = () => {
	// const { id } = useParams()
	const id = 78

	const url = "http://ongapi.alkemy.org/api/testimonials";

	const [ formValues, setFormValues ] = useState({
		name: "",
		description: "",
		image: "",
	})

	const handleChange = (e, property, editor) => {
		setFormValues({
			...formValues,
			[ property ]: e.target?.value || editor.getData(),
		})
	}

	const image = (e) => {
		const file = e.target.files[ 0 ]
		const reader = new FileReader()
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setFormValues({
				...formValues,
				image: reader.result,
			})
		}
	}

	
	const getImagePreview = async (baseUrl) => {
		const data = await fetch(baseUrl)
		const blob = await data.blob()
		return new Promise((resolve) => {
			const fReader = new FileReader()
			fReader.readAsDataURL(blob)
			fReader.onloadend = () => {
				const base64data = fReader.result
				resolve(base64data)
			}
		})
	}
	
	const Get = async (baseUrl, id) => {
		const url = `${baseUrl}/${id}`
		try {
			const res = await axios.get(url)
			return res.data
		} catch (error) {
			return error
		}
	}


	const getDataTestimonials = async () => {
		if (id) {
			try {
				// pq pisa la data del formvalues y la deja en " "
				// pero funciona repitiendo codigo
				await Get(url, id).then((res) => {
					const { data } = res;
					setFormValues({
						...formValues,
						name: data.name,
						description: data.description,
					})
					getImagePreview(data.image).then((imagen64) => {
						setFormValues({
							name: data.name,
							image: imagen64,
							description: data.description,
						})
					})
				})
			} catch (error) {
				alert("Testimonio Inexistente")
			}
		}
	}

	const createTestimonial = (formValues) => {
		axios
			.post(url, formValues)
			.then(({ status }) => alert(status))
			.catch((err) => alert(err))
	}

	const updateTestimonial = (formValues) => {
		axios
			.put(`${url}/${id}`, formValues)
			.then(({ status }) => alert(status))
			.catch((err) => alert(err))
	}

	useEffect(() => {
		getDataTestimonials()
		// eslint-disable-next-line
	}, [])

	const validate = (values) => {
		const errors = {}
		if (!values.name) {
			errors.name = "El campo nombre no puede estar vacio"
		} else if (values.name.length < 4) {
			errors.name = "El nombre debe tener al menos 4 caracteres"
		}
		if (!values.description) {
			errors.description = "El campo descripcion no puede estar vacio"
		}
		if (!values.image) {
			errors.image = "El campo imagen no puede estar vacio"
		}
		return errors
	}
	const onSubmit = (values) => {
		if (!formik.isValid) {
			return
		} else if (id) {
			updateTestimonial(values)
		} else {
			createTestimonial(values)
		}
	}

	const formik = useFormik({
		initialValues: formValues,
		validate,
		onSubmit,
	})

	console.log(formValues, "values")
	return (
		<form className="form" onSubmit={formik.handleSubmit}>
			<h2>Testimonios</h2>
			<label className="form__label">Nombre:</label>
			<input
				className="input-field"
				type="text"
				name="name"
				defaultValue={formValues.name || formik.values.name || ""}
				onChange={(e) => formik.handleChange && handleChange(e, "name")}
				onBlur={formik.handleBlur}
			></input>
			{
				formik.touched.name && formik.errors.name
					? (<small className="form__text-error">{formik.errors.name}</small>)
					: null
			}
			<label className="form__label">Imagen:</label>
			<input
				type="file"
				name="image"
				onChange={(e) => {
					handleChange(e, "image")
					image(e)
				}}
				accept="image/png,image/jpeg"
			/>
			{
				formValues.image
					? <img src={formValues.image} className="form__image-preview" alt="ImagePreview" />
					: null
			}
			<label className="form__label">Descripcion:</label>
			<CKEditor
				editor={ClassicEditor}
				data={formValues.description}
				onChange={(event, editor) => {
					handleChange("", "description", editor)
				}}
			/>
			<button className="submit-btn" type="submit">
				Send
			</button>
		</form>
	)
}
export default TestimonialForm
