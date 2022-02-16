import React from "react";
import '../PageNotFound/404styles.scss';
import img from './404.png'

const PageNotFound = () => {

    return(
        <>
            <div className="notFound">
                <div className="notFound__imgContent">
                    <img className="notFound__imgContent__img" src={img} alt="" />
                    <p className="notFound__number">
                        404
                    </p>
                </div>
                <div className="notFound__description">
                    <p className="notFound__error">
                        UPSSSS!!!! Pagina no encontrada.
                    </p>
                    <a href="#" className="notFound__button">SACAME DE AQUI!.</a>
                </div>
            </div>
        </>
    );
};

export default PageNotFound;