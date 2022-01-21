import React, {useState} from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormLabel from '@mui/material/FormLabel';

const EditOrganitationDataForm = () => {

    const [organitationData, setOrganitationData] = useState(organitationDataStructure())

    const handleChange = (event) => {
        event.target.id === 'name' && setOrganitationData({...organitationData, name:event.target.value})
        event.target.id === 'longDescription' && setOrganitationData({...organitationData, longDescription:event.target.value})
        event.target.id === 'facebook' && setOrganitationData({...organitationData, facebook:event.target.value})
        event.target.id === 'linkedin' && setOrganitationData({...organitationData, linkedin:event.target.value})
        event.target.id === 'instagram' && setOrganitationData({...organitationData, instagram:event.target.value})
        event.target.id === 'twitter' && setOrganitationData({...organitationData, twitter:event.target.value})
    }

    return (
        <div>
            <FormControl>
            <InputLabel htmlFor="my-input" required={true}>Name</InputLabel>
            <Input id="name" aria-describedby="my-helper-text" onChange={handleChange}/>
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="my-input" required={true}>Long description</InputLabel>
            <Input id="longDescription" aria-describedby="my-helper-text" onChange={handleChange}/>
            </FormControl>
            <FormLabel>Redes sociales</FormLabel>
            <FormControl>
            <InputLabel htmlFor="my-input" >Facebook</InputLabel>
            <Input id="facebook" aria-describedby="my-helper-text" onChange={handleChange}/>
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="my-input" >Linkedin</InputLabel>
            <Input id="linkedin" aria-describedby="my-helper-text" onChange={handleChange}/>
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="my-input" >Instagram</InputLabel>
            <Input id="instagram" aria-describedby="my-helper-text" onChange={handleChange}/>
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="my-input" >Twitter</InputLabel>
            <Input id="twitter" aria-describedby="my-helper-text" onChange={handleChange}/>
            </FormControl>
            <FormControl>
            <Input id="my-input" type='submit' onClick={() => console.log('hola')}/>
            </FormControl>
        </div>
    )
}

const organitationDataStructure = () => {
    return {
        name:'',
        logo:'',
        shortDescription:'',
        longDescription:'',
        facebookUrl:'',
        linkedinUrl:'',
        instagramUrl:'',
        twitterUrl:''
    }
}

export default EditOrganitationDataForm