import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/laoder/css/react-spinner-loader.css"

const Spinner = () => {
	return (
		<>
			<Loader
				type="TailSpin"
				color="#00BFFF"
				Height="100"
				Width="100"
				timeout={3000}
			/>
		</>
	)
}

export default Spinner
