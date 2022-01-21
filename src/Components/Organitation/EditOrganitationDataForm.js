import React, {useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';

const EditOrganitationDataForm = () => {

    const [organitationData, setOrganitationData] = useState(organitationDataStructure())
    const [requiredSocials, setRequiredSocials] = useState(socialsRequired())
    console.log(organitationData);
    const handleChange = (event) => {
        for (const property in organitationData) {
            event.target.id === property && setOrganitationData({...organitationData, [property] : event.target.value})
        }
    }

    const handleBlurSocials = (event) => {
        let regex = new RegExp(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi);
        let verifyUrl = event.target.value.match(regex)
        if(!verifyUrl){
            for (const property in requiredSocials) {
                event.target.id === property && setRequiredSocials({...requiredSocials, [property] : 'Tienes que ingresar una URL.'})
            }
        } else {
            for (const property in organitationData) {
            event.target.id === property && setOrganitationData({...organitationData, [property] : event.target.value})
            for (const property in requiredSocials) {
                event.target.id === property && setRequiredSocials({...requiredSocials, [property] : ''})
            }
        }}
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let emptyInputs = []
        for (const property in organitationData) {
            !organitationData[property] && emptyInputs.push(property.charAt(0).toUpperCase() + property.slice(1))
        }
        emptyInputs.length ? emptyInputs.map(element => alert(`El campo ${element} es obligatorio.`)) : alert('Todos los campos estan bien.')
    }

    return (
        <div>
            <FormControl>
            <InputLabel htmlFor="name" required>Name</InputLabel>
            <Input id="name" aria-describedby="my-helper-text" onChange={handleChange}/>
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="logo" required>Logo</InputLabel>
            <Input id="logo" type='file' accept="image/x-png, image/jpeg" aria-describedby="my-helper-text" onChange={handleChange}/>
            </FormControl>
            <CKEditor
                    editor={ ClassicEditor }
                    data={null}
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setOrganitationData({...organitationData, shortDescription:data})
                    } }
            />
            <FormControl>
            <InputLabel htmlFor="longDescription" required>Long description</InputLabel>
            <Input id="longDescription" aria-describedby="my-helper-text" onChange={handleChange}/>
            </FormControl>
            <FormLabel>Redes sociales</FormLabel>
            <FormControl>
            <InputLabel htmlFor="facebook" >Facebook</InputLabel>
            <Input id="facebook" aria-describedby="my-helper-text" onBlur={handleBlurSocials}/>
            <FormHelperText id="my-helper-text">{requiredSocials.facebook}</FormHelperText>
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="linkedin" >Linkedin</InputLabel>
            <Input id="linkedin" aria-describedby="my-helper-text" onBlur={handleBlurSocials}/>
            <FormHelperText id="my-helper-text">{requiredSocials.linkedin}</FormHelperText>
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="instagram" >Instagram</InputLabel>
            <Input id="instagram" aria-describedby="my-helper-text" onBlur={handleBlurSocials}/>
            <FormHelperText id="my-helper-text">{requiredSocials.instagram}</FormHelperText>
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="twitter" >Twitter</InputLabel>
            <Input id="twitter" aria-describedby="my-helper-text" onBlur={handleBlurSocials}/>
            <FormHelperText id="my-helper-text">{requiredSocials.twitter}</FormHelperText>
            </FormControl>
            <FormControl>
            <Input id="submit" type='submit' onClick={handleSubmit}/>
            </FormControl>
        </div>
    )
}

const organitationDataStructure = () => {
    return {
        name:null,
        logo:null,
        shortDescription:null,
        longDescription:null,
        facebook:null,
        linkedin:null,
        instagram:null,
        twitter:null
    }
}

const socialsRequired = () => {
    return {
        facebook: '',
        linkedin: '',
        instagram: '',
        twitter: ''
    }
}

export default EditOrganitationDataForm