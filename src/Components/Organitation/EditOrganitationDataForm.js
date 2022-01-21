import React, {useState} from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormLabel from '@mui/material/FormLabel';

const EditOrganitationDataForm = () => {

    const [organitationData, setOrganitationData] = useState(organitationDataStructure())
    
    return (
        <div>
            <FormControl>
            <InputLabel htmlFor="my-input" required={true}>Name</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="my-input" required={true}>Large description</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormLabel>Redes sociales</FormLabel>
            <FormControl>
            <InputLabel htmlFor="my-input" required={true}>Facebook</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="my-input" required={true}>Linkedin</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="my-input" required={true}>Instagram</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="my-input" required={true}>Twitter</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
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