import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const sweetAlertSuccess = (text) => {
  MySwal.fire({
    icon: "success",
    title: "Éxito!",
    text,
  });
};
