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

export const sweetAlertError = (text) => {
  MySwal.fire({
    icon: "error",
    title: "Hubo un problema!",
    text,
  });
};
