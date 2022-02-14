import React from "react";
import '../PageNotFound/404styles.scss';
import img from './404.png'

const PageNotFound = () => {

    return(
        <>
            <div class="conten">
                <div class="conten__img">
                    <img src={img} alt="" />
                    <p class="conten__number">
                        404
                    </p>
                </div>
                    <div class="conten__Description">
                        <p class="conten__error">
                            UPSSSS!!!! Pagina no encontrada.
                        </p>
                    <a href="#" class="conten__button">SACAME DE AQUI!.</a>
                </div>
            </div>
        </>
    );
};

export default PageNotFound;