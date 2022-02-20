import React from "react";
import { Link } from "react-router-dom";
import img from '../../images/404.png'

const PageNotFound = () => {

    return (
        <>
            <div className="notFound">
                <div className="notFound__imgContent">
                    <img className="notFound__imgContent__img" src={img} alt="" />
                    <p className="notFound__number">
                        404
                    </p>
                </div>
                <div>
                    <p className="notFound__error">
                        UPSSSS!!!! Pagina no encontrada.
                    </p>
                    <Link to='/' className="notFound__button">SACAME DE AQUI!.</Link>
                </div>
            </div>
        </>
    );
};

export default PageNotFound;