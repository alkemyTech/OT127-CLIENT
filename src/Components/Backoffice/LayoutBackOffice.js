import Sidebar from "../Sidebar/Sidebar";

function LayoutBackOffice(props) {
  return (
    <div className="app_container">
      <Sidebar />
      {props.children}
    </div>
  );
}

export default LayoutBackOffice;
