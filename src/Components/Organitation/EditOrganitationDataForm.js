import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormLabel from '@mui/material/FormLabel';

const EditOrganitationDataForm = () => {
    return (
        <div>
            <FormControl>
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="my-input">Large description</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
        </div>
    )
}

export default EditOrganitationDataForm
/* 
"facebook_url": "string",
  "linkedin_url": "string",
  "instagram_url": "string",
  "twitter_url": "string" */