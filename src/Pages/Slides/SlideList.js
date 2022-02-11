import { useEffect } from "react";
import { getSlides } from "../../Redux/reducers/slidesSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const SlideList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSlides());
  }, []); //eslint-disable-line

  const slides = useSelector((state) => state.slidesReducer.slides.data);

  const rows = slides;

  return (
    <div className="list-container">
      <Link to="/backoffice/slides/create">Crear Slide</Link>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Título</TableCell>
              <TableCell align="center">Imagen</TableCell>
              <TableCell align="center">Orden</TableCell>
              <TableCell align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(({ id, name, image, order }) => (
              <TableRow key={id}>
                <TableCell align="center">{name}</TableCell>
                <TableCell align="center">
                  <img src={image} alt="" className="imageTable" />
                </TableCell>
                <TableCell align="center">{order}</TableCell>
                <TableCell>
                  <button>
                    <Link to={`/backoffice/slides/edicion/${id}`}>Editar</Link>
                  </button>
                </TableCell>
                <TableCell align="center">
                  <button>
                    {/*TODO: Crear ruta*/}
                    <Link to={`/backoffice/slides/delete/${id}`}>Eliminar</Link>
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SlideList;
