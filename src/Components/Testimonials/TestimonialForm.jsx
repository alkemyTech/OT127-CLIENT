import { useParams } from "react-router-dom"
import * as Yup from "yup"
import { Field, Form, Formik } from "formik"
import { useEffect, useState, useRef } from "react"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import axios from "axios"

import "../FormStyles.css"
import "./styles.scss"

const TestimonialForm = () => {
	const [ name, setName ] = useState("")
	const [ description, setDescription ] = useState("")
	const [ image, setImage ] = useState("")
	const [ create, setCreate ] = useState(true)
	const url = "http://ongapi.alkemy.org/api/testimonials"

	const { id } = useParams()
	// const id = 78

	const Post = async (url, body) => {
		try {
			const res = await axios.post(url, body)
			return res.data
		} catch (error) {
			return { success: false, error }
		}
	}

	const Put = async (url, id, body) => {
		const bUrl = `${url}/${id}`
		try {
			const res = await axios.put(bUrl, body)
			return res.data
		} catch (error) {
			return { success: false, error }
		}
	}

	const Get = async (url, id) => {
		const bUrl = `${url}/${id}`

		try {
			const res = await axios.get(bUrl)
			return res.data
		} catch (error) {
			return { success: false, error }
		}
	}

	const getImagePreview = async (url) => {
		const data = await fetch(url)
		const blob = await data.blob()
		return new Promise((resolve) => {
			const reader = new FileReader()
			reader.readAsDataURL(blob)
			reader.onloadend = () => {
				const base64data = reader.result
				resolve(base64data)
			}
		})
	}

	const submitForm = async (values, formik) => {
		if (create) {
			try {
				const res = await Post(
					url,
					values
				)
				formik.setSubmitting(false)
				alert("Testimonio creado correctamente")
				resetForm()
			} catch (error) {
				alert(error)
			}
		} else {
			try {
				const res = await Put(
					url,
					id,
					values
				)
				formik.setSubmitting(false)
				resetForm()
				return alert("Testimonio actualizado correctamente")
			} catch (error) {
				alert(error)
			}
		}
	}

	const getDataTestimonials = async () => {
		if (id) {
			try {
				await Get(url, id).then(
					(res) => {
						const {
							data: { name, description, image },
						} = res
						getImagePreview(image).then((imagen64) => {
							setImage(imagen64)
						})
						setName(name)
						setDescription(description)
						setCreate(false)
					}
				)
			} catch (error) {
				alert(error)
			}
		}
	}

	useEffect(() => {
		getDataTestimonials()
		// eslint-disable-next-line
	}, [])



	const handleChange = (e, propsFormik) => {
		if (e.currentTarget.files && e.currentTarget.files[ 0 ]) {
			const reader = new FileReader()
			reader.onload = function (e) {
				propsFormik.setFieldValue("image", e.target.result)
			}
			reader.readAsDataURL(e.currentTarget.files[ 0 ])
		}
	}

	const handleChangeDescription = (event, editor, props) => {
		const data = editor.getData()
		props.setFieldValue("description", data)
	}
	const resetForm = (props) => {
		const clear = ""
		props.setFieldValue("name", clear)
		props.setFieldValue("image", clear)
		props.setFieldValue("description", clear)

		inputFileRef.current.value = ""
	}

	const inputFileRef = useRef()

	const ErrorYup = Yup.object().shape({
		name: Yup.string()
			.required("El campo nombre es requerido.")
			.min(4, "El nombre de debe tener al menos 4 caracteres"),
		description: Yup.string().required("El campo descripcion es requerido."),
		image: Yup.string().required("La imagen es requerida."),
	})

	return (
		<div>
			<Formik
				initialValues={{ name, description, image }}
				onSubmit={(values, formik) => {
					submitForm(values, formik,{resetForm})
					resetForm({values:""})
				}}
				validationSchema={ErrorYup}
				enableReinitialize={true}
				validateOnMount={!create}
			>
				{(props) => {
					return (
						<Form className="form">
							<h3 className="form__header-title">Testimonial Form</h3>
							<label className="form__label">Name: </label>
							<Field
								name="name"
								type="text"
								className="input-field"
							/>
							<small className="form__text-error">
								{props.initialTouched && props.errors.name}
							</small>
							<label className="form__label">
								Image:
							</label>
							<div className="form__image-container">
								<input
									type="file"
									ref={inputFileRef}
									name="image"
									accept="image/png,image/jpeg"
									onChange={(event) => {
										handleChange(event, props)
									}}
								/>
								<img
									className="form__image-preview"
									src={props.values.image}
									alt="ImgPreview"
									onError={(e) => {
										e.target.src =
											"/images/placeholder/370x240.png"
									}}
								/>
							</div>
							<small className="form__text-error">
								{props.initialTouched.image && props.errors.image}
							</small>
							<label className="form__label">Description: </label>
							<CKEditor
								name="description"
								editor={ClassicEditor}
								data={description}
								onChange={(event, editor) => {
									handleChangeDescription(
										event,
										editor,
										props
									)
								}}
							/>
							<small className="form__text-error">
								{props.initialTouched.description && props.errors.description}
							</small>

							{!create ? (
								<button
									type="submit"
									disabled={
										!props.isValid || props.isSubmitting
									}
								>
									{" "}
									Actualizar
								</button>
							) : (
								<button
									type="submit"
									disabled={
										!(props.isValid && props.dirty) ||
										props.isSubmitting
									}
								>
									{" "}
									Crear
								</button>
							)}
						</Form>
					)
				}}
			</Formik>
		</div>
	)
}
export default TestimonialForm
