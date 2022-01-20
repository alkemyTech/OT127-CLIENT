import React from 'react';
import PropTypes from 'prop-types'
import imgPlaceholder from './600x450.png'

export const TitleNews = (props) => {
	const { title,news, image } = props
	return(
		<div className="container">
			<div className="title-header">
				<h1>{title}</h1>
			</div>
			<div className="title-body">
				{/* La idea es una vez que haya clases la imagen ocupe el 30% de la 
			izquierda y el resto a la derecha las novedades  */}
				<div className="title-body-side">
					{ 
						(image)
							?
						<img src={image} alt="Novedades" />
							:
						<img src={imgPlaceholder} alt="Novedades" />
					}
				</div>
				<div className="title-body-news">
					<p>{news}</p>
				</div>
			</div>
		</div>
	)
}

TitleNews.propTypes = {
	title: PropTypes.string.isRequired,
	news:PropTypes.string.isRequired,
	image: PropTypes.string
}
