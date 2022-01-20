import React from 'react';

function Donacion(props) {
    const { message } = props
    return (
    <div>
        {message &&
            <p>{message}</p>
        }
        <button>MercadoPago</button>
    </div>
    );
}

export default Donacion;
