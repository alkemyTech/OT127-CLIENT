import { useEffect } from "react";
import { getSlides, getSlidesSearch } from "../../Redux/reducers/slidesSlice";
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
  }, []);

  const slides = useSelector((state) => state.slidesReducer.slides.data);

  const rows = slides;

  const handleSearchChange = (e) => {
    let { value } = e.target;
    if (value.length > 2) {
      dispatch(getSlidesSearch(value));
    } else {
      dispatch(getSlides());
    }
  };
  return (
    <div className="list-container">
      <Link to="/backoffice/slides/create">Crear Slide</Link>
      <input
        type="search"
        name="search"
        onChange={(e) => {
          handleSearchChange(e);
        }}
        placeholder="Buscar Slide"
      />
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
                  <img src={image} alt="" className="imageTable" width="100" />
                </TableCell>
                <TableCell align="center">{order}</TableCell>
                <TableCell>
                  <button>
                    <Link to={`/backoffice/slides/edit/${id}`}>Editar</Link>
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
