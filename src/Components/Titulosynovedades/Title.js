import React from 'react';
import PropTypes from 'prop-types'
import imgPlaceHolder from '../../assets/images/600x450.png'

export const Title = ({ title, image }) => {


	return (
		<>
			<div className="title__container" style={{
				backgroundImage: `url(${image || imgPlaceHolder})`
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
