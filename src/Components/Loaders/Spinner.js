import {TailSpin} from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import "./styles.scss"

const Spinner = () => {
	return (
		<div className="spinner">
			<TailSpin
				type="TailSpin"
				color="#00BFFF"
				Height="100"
				Width="100"
				timeout={3000}
			/>
		</div>
	)
}

export default Spinner
