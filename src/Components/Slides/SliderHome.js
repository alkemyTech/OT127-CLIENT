import React from 'react';
import axios from 'axios'
import './SliderHome.css'

const SliderHome = () => {
    return (
        <div className='slider'>
            <div className='slider__container'>
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
                <span className='material-icons slider__arrow-button slider__arrow-button--left'>
                    chevron_left
                </span>
                <span className='material-icons slider__arrow-button slider__arrow-button--right'>
                    chevron_right
                </span>
            </div>
        </div>
    )
};

export default SliderHome;
