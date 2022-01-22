import React, { useState } from 'react';

const NewsletterForm = () => {
    const [email, setEmail] = useState({
        email:'',
    });

    const handleChange = ({target}) =>{
        setEmail({
            [target.name] : target.value,
        })
    }

    const handleSubmit = ( e ) =>{
        e.preventDefault()
        console.log('hola Submit');
    }

    return  <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Newsletter</label>
                    <input type="email" name="email" id="email" value={email} onChange={handleChange} placeholder="Ingresa tu email" />
                    <button type='submit'> suscribirse </button>
                </form>
            </div>;
};

export default NewsletterForm;
