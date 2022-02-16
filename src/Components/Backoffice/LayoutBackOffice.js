import Sidebar from "../Sidebar/Sidebar";

function LayoutBackOffice(props) {
	return (
		<>
			<Sidebar />
			{props.children}
		</>
	);
}

export default LayoutBackOffice;
