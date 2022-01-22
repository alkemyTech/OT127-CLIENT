import React from 'react';
import PropTypes from 'prop-types'

export const Title = ({ title, image }) => {
	const imgPlaceHolder = "/images/600x450.png"

	return (
		<>
			<div className="title__container" style={{
				backgroundImage: `url(${image || imgPlaceHolder })`
			}}>
				<div className="title__header">
					<h1>{title}</h1>
				</div>
			</div>
		</>
	)
}

Title.propTypes = {
	title: PropTypes.string.isRequired,
	image: PropTypes.string
}
