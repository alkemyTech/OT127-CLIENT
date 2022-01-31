import React, { useEffect, useState } from "react"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useFormik } from "formik"

import "../FormStyles.css"
import "./styles.scss"

const TestimonialForm = () => {
	const { id } = useParams()
	const url = "http://ongapi.alkemy.org/api/testimonials"
	const [ name, setName ] = useState("")
	const [ description, setDescription ] = useState("")
	const [ imageInput, setImageInput ] = useState("")

	const image = (e) => {
		const file = e.target.files[ 0 ]
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onloadend = () => {
			setImageInput(reader.result)
		}
	}

	const Get = async (baseUrl, id) => {
		const url = id ? `${baseUrl}/${id}` : `${baseUrl}`
		try {
			const res = await axios.get(url)
			return res.data
		} catch (error) {
			return error
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


	const getDataTestimonials = async () => {
		if (id) {
			try {
				await Get(url, id).then((res) => {
					const { data } = res
					getImagePreview(data.image).then((imagen64) => {
						setImageInput(imagen64)
					})
					setName(data.name)
					setDescription(data.description)
				})
			} catch (error) {
				// alert("Testimonio Inexistente")
			}
		}
	}

	const createTestimonial = (values) => {
		axios
			.post(url, {
				name: values.name,
				description: values.description,
				image: imageInput,
			})
			.then((res) => alert(res))
			.catch((err) => alert(err))
	}

	const updateTestimonial = (values) => {
		axios
			.put(`${url}/${id}`, {
				name: values.name,
				description: values.description,
				image: imageInput,
			})
			.then(({ data }) => alert(data))
			.catch((err) => alert(err))
	}

	useEffect(() => {
		getDataTestimonials()
		// eslint-disable-next-line
	}, [])

	const formik = useFormik({
		initialValues: {
			name: "",
			description: "",
			image: "",
		},
		validate: (values) => {
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
		},
		onSubmit: (values) => {
			if (!formik.isValid) {
				return
			} else if (id) {
				updateTestimonial(values)
			} else {
				createTestimonial(values)
			}
		},
	})

	return (
		<form className="form" onSubmit={formik.handleSubmit}>
			<h2>Testimonios</h2>
			<label className="form__label">Nombre:</label>
			<input
				className="input-field"
				type="text"
				name="name"
				defaultValue={name || formik.values.name || ""}
				onChange={formik.handleChange}
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
					formik.handleChange(e)
					image(e)
				}}
				accept="image/png,image/jpeg"
			/>
			{
				(imageInput)
					? <img src={imageInput} className="form__image-preview" alt="ImagePreview" />
					: null
			}
			<label className="form__label">Descripcion:</label>
			<CKEditor
				editor={ClassicEditor}
				data={description}
				onChange={(event, editor) => {
					formik.setFieldValue("description", editor.getDataTestimonials())
				}}
			/>
			<button className="submit-btn" type="submit">
				Send
			</button>
		</form>
	)
}
export default TestimonialForm
