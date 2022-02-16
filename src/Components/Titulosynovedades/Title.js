import React from "react"
import PropTypes from "prop-types"


const Title = ({ title, image = "/images/600x450.png" }) => {
	return (
		<>
			<div
				className="title__container"
				style={{
					backgroundImage: `url(${image})`
				}}
			>
				<div className="title__header">
					<h1>{title}</h1>
				</div>
			</div>
		</>
	)
}
export default Title
Title.propTypes = {
	title: PropTypes.string.isRequired,
	image: PropTypes.string
}
