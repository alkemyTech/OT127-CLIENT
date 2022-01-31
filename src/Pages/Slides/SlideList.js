import { useState } from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./SlideList.css";

const slides = {
  data: [
    {
      id: 1,
      name: "Ignacio",
      image: "http://ongapi.alkemy.org/storage/j8Uo4skOTP.jpeg",
      order: 5454,
    },
    {
      id: 2,
      name: "Roman",
      image: "http://ongapi.alkemy.org/storage/rEZJhWbxCx.jpeg",
      order: 8989,
    },
    {
      id: 3,
      name: "Título de prueba",
      image: "http://ongapi.alkemy.org/storage/tRMcq6w2JV.jpeg",
      order: 1,
    },
    {
      id: 4,
      name: "myslide",
      image: "http://ongapi.alkemy.org/storage/ae5LYQeuId.png",
      order: 4555,
    },
  ],
};

const getSlidesData = new Promise((res) => res(slides));

const SlideList = () => {
  const [slides, setSlides] = useState([]);

  getSlidesData.then((res) => {
    setSlides(res.data);
  });

  const rows = slides;

  return (
    <div className="container">
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
            {rows &&
              rows.map(({ id, name, image, order }) => (
                <TableRow key={id}>
                  <TableCell align="center">{name}</TableCell>
                  <TableCell align="center">
                    <img src={image} alt="" className="imageTable" />
                  </TableCell>
                  <TableCell align="center">{order}</TableCell>
                  <TableCell>
                    <button>
                      <Link to={`/backoffice/slides/edicion/${id}`}>
                        Editar
                      </Link>
                    </button>
                  </TableCell>
                  <TableCell align="center">
                    <button>
                      {/*TODO: Crear ruta*/}
                      <Link to={`/backoffice/slides/delete/${id}`}>
                        Eliminar
                      </Link>
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
