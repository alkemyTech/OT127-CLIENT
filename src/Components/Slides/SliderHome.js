import React, { useRef, useEffect, useState } from "react";
import { getSlides } from "../../Redux/reducers/slidesSlice";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../Spinner/Spinner";


const SliderHome = () => {
  const carousel = useRef(null);
  const intervalCarousel = useRef(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getSlides());
    setLoading(false);
  }, []); //eslint-disable-line

  const sliderData = useSelector((state) => state.slidesReducer.slides.data);

  const nextSlide = () => {
    // Me aseguro que se ejecute solo cuando el carrusel tenga contenido
    if (carousel.current.children.length > 0) {
      // Primer item carrusel
      const firstItem = carousel.current.children[0];
      // Animacion de transicion
      carousel.current.style.transition = "300ms ease-out all";
      // obtengo cuanto mide cada item, asi se cuanto desplazarlo
      const slideWidth = firstItem.offsetWidth;
      // Movemos el slide actual para mostrar el nuevo
      carousel.current.style.transform = `translateX(-${slideWidth}px)`;

      // el slide viejo lo tenemos que poner al final de la fila, asi se comporta como slide infinito
      // pero antes de ponerlo al final, hay que esperar que termine la animacion
      setTimeout(() => {
        carousel.current.style.transition = "none";
        carousel.current.style.transform = `translateX(0)`;
        // mandamos al final el item que acabamos de mover
        carousel.current.appendChild(firstItem);
      }, 300);
    }
  };

  const prevSlide = () => {
    if (carousel.current.children.length > 0) {
      const lastItemIndex = carousel.current.children.length - 1;
      const lastItem = carousel.current.children[lastItemIndex];
      carousel.current.insertBefore(lastItem, carousel.current.firstChild);

      carousel.current.style.transition = "none";
      const slideWidth = carousel.current.children[0].offsetWidth;
      carousel.current.style.transform = `translateX(-${slideWidth}px)`;

      setTimeout(() => {
        carousel.current.style.transition = "300ms ease-out all";
        carousel.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  // Para hacer que el slider cambie automaticamente cada 5 segundos
  useEffect(() => {
    // Esto hace que el slider cambie cada 5 segundos
    // esto puede genera que un usuario no alcance a leer la informacion del slide
    // o que cuando le de click al siguiente slide, este cambie 2 veces
    // seguidas porque justo pasaron 5 segundo y se cambia automaticamente
    intervalCarousel.current = setInterval(() => {
      nextSlide();
    }, 5000);
    // Cuando el mouse este encima del slider eliminamos el intervalo
    // para que este no cambiara automaticamente
    carousel.current.addEventListener("mouseenter", () => {
      clearInterval(intervalCarousel.current);
    });
    // Cuando el mouse deje estar sobre el slider, reestablecemos el intervalo
    carousel.current.addEventListener("mouseleave", () => {
      intervalCarousel.current = setInterval(() => {
        nextSlide();
      }, 5000);
    });
  }, []);



  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="slider">
          <div className="slider__container" ref={carousel}>
            {sliderData.map((slide) => (
              <div className="slider__item" key={slide.id}>
                <img className="slider__img" src={slide.image} alt={slide.name} />
                <div className="slider__text">
                  <p className="slider__text--title">{slide.name}</p>
                  <p className="slider__text--description">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="slider__controllers">
            <span
              className="slider__arrow-button slider__arrow-button--left"
              onClick={prevSlide}
            >
              <i class="fa fa-chevron-left"></i>
            </span>
            <span
              className="slider__arrow-button slider__arrow-button--right"
              onClick={nextSlide}
            >
              <i class="fa fa-chevron-right"></i>
            </span>
          </div>
        </div>
      )
      }
    </>
  );
};

export default SliderHome;
