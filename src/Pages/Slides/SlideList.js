import { useState } from "react";
import { useHistory } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
      name: "Titulo de prueba asdsad  ad asd asd ",
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

const getSlidesData = new Promise((resolved) => resolved(slides));

const SlideList = () => {
  const [slides, setSlides] = useState([]);
  const history = useHistory();

  const routeRedirect = (id) => {
    let path = `ruta`;
    history.push(path);
  };

  getSlidesData.then((res) => {
    setSlides(res.data);
  });

  const rows = slides;

  return (
    <div style={{ width: "90%", padding: "1em", margin: "0 auto" }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Titulo</TableCell>
              <TableCell align="center">Imagen</TableCell>
              <TableCell align="center">Orden</TableCell>
              <TableCell align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">
                    <img src={row.image} alt="" style={{ width: "30%" }} />
                  </TableCell>
                  <TableCell align="center">{row.order}</TableCell>
                  <TableCell>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        routeRedirect(row.id);
                      }}
                    >
                      Editar
                    </button>
                  </TableCell>
                  <TableCell align="center">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        routeRedirect(row.id);
                      }}
                    >
                      Eliminar
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
