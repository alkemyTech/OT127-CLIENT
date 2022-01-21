import React, { useRef } from 'react';
import axios from 'axios'
import './SliderHome.css'

const SliderHome = () => {
    const carousel = useRef(null)

    const nextSlide = () => {
        // Me aseguro que se ejecute solo cuando el carrusel tenga contenido
        if (carousel.current.children.length > 0) {
            // Primer item carrusel
            const firstItem = carousel.current.children[0]
            // Animacion de transicion
            carousel.current.style.transition = '300ms ease-out all'
            // obtengo cuanto mide cada item, asi se cuanto desplazarlo
            const slideWidth = firstItem.offsetWidth
            // Movemos el slide actual para mostrar el nuevo
            carousel.current.style.transform = `translateX(-${slideWidth}px)`

            // el slide viejo lo tenemos que poner al final de la fila, asi se comporta como slide infinito
            // pero antes de ponerlo al final, hay que esperar que termine la animacion
            setTimeout(() => {
                carousel.current.style.transition = 'none'
                carousel.current.style.transform = `translateX(0)`
                // mandamos al final el item que acabamos de mover
                carousel.current.appendChild(firstItem)
            }, 300)
        }
    }

    const prevSlide = () => {
        if (carousel.current.children.length > 0) {
            const lastItemIndex = carousel.current.children.length - 1
            const lastItem = carousel.current.children[lastItemIndex]
            carousel.current.insertBefore(lastItem, carousel.current.firstChild)

            carousel.current.style.transition = 'none'
            const slideWidth = carousel.current.children[0].offsetWidth
            carousel.current.style.transform = `translateX(-${slideWidth}px)`

            setTimeout(() => {
                carousel.current.style.transition = '300ms ease-out all'
                carousel.current.style.transform = `translateX(0)`
            }, 30)
        }
    }

    return (
        <div className='slider'>
            <div className='slider__container' ref={carousel}>
                <div className='slider__item'>
                    <img className='slider__img' src='http://ongapi.alkemy.org/storage/7vblqMvl8i.jpeg' />
                    <div className='slider__text-container'>
                        <p className='slider__title'>Actividades al aire libre</p>
                        <p className='slider__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet luctus sapien. Suspendisse semper molestie ipsum. Donec facilisis pharetra turpis, nec feugiat mauris.</p>
                    </div>
                </div>
                <div className='slider__item'>
                    <img className='slider__img' src='http://ongapi.alkemy.org/storage/CrqfC00m38.jpeg' />
                    <div className='slider__text-container'>
                        <p className='slider__title'>Actividades al aire libre</p>
                        <p className='slider__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet luctus sapien. Suspendisse semper molestie ipsum. Donec facilisis pharetra turpis, nec feugiat mauris.</p>
                    </div>
                </div>
                <div className='slider__item'>
                    <img className='slider__img' src='http://ongapi.alkemy.org/storage/QZPcYyweUM.jpeg' />
                    <div className='slider__text-container'>
                        <p className='slider__title'>Actividades al aire libre</p>
                        <p className='slider__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet luctus sapien. Suspendisse semper molestie ipsum. Donec facilisis pharetra turpis, nec feugiat mauris.</p>
                    </div>
                </div>
            </div>
            <div className='slider__controllers'>
                <span className='material-icons slider__arrow-button slider__arrow-button--left' onClick={prevSlide}>
                    chevron_left
                </span>
                <span className='material-icons slider__arrow-button slider__arrow-button--right' onClick={nextSlide}>
                    chevron_right
                </span>
            </div>
        </div>
    )
};

export default SliderHome;
