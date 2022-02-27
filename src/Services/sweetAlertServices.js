import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const sweetAlertSuccess = (text) => {
  MySwal.fire({
    icon: "success",
    title: "Éxito!",
    text,
    showConfirmButton: false,
    timer: 1500,
  });
};

export const sweetAlertError = (text) => {
  MySwal.fire({
    icon: "error",
    title: "Hubo un problema!",
    text,
  });
};

export const sweetAlertInfo = (text) => {
  MySwal.fire({
    icon: "info",
    title: "Información",
    text,
  });
};

export const sweetAlertConfirm = (title, text, imageUrl) => {
  return MySwal.fire({
    title,
    text,
    imageUrl,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Acepto",
    cancelButtonText: "No acepto",
  }).then((resultado) => {
    if (resultado.value) {
      return true;
    } else {
      return false;
    }
  });
};
