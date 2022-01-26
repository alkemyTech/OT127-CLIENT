import React from "react";
import { Link } from "react-router-dom";
import "../CardListStyles.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const NewsList = () => {
  const newsMock = [
    {
      id: 2,
      name: "Titulo de prueba",
      image:
        "https://us.123rf.com/450wm/alhovik/alhovik1709/alhovik170900031/86481591-antecedentes-de-las-noticias-de-%C3%BAltima-hora-world-global-tv-news-banner-design.jpg?ver=6",
      description: "Descripcion de prueba",
      createdAt: "26-01-2022",
    },
    {
      id: 1,
      name: "Titulo de prueba",
      image:
        "https://us.123rf.com/450wm/alhovik/alhovik1709/alhovik170900031/86481591-antecedentes-de-las-noticias-de-%C3%BAltima-hora-world-global-tv-news-banner-design.jpg?ver=6",
      description: "Descripcion de prueba",
      createdAt: "26-01-2022",
    },
    {
      id: 3,
      name: "Titulo de prueba",
      image:
        "https://us.123rf.com/450wm/alhovik/alhovik1709/alhovik170900031/86481591-antecedentes-de-las-noticias-de-%C3%BAltima-hora-world-global-tv-news-banner-design.jpg?ver=6",
      description: "Descripcion de prueba",
      createdAt: "26-01-2022",
    },
  ];

  const createData = (name, image, createdAt, actions) => {
    return { name, image, createdAt, actions };
  }

  const rows = newsMock.map((mock) =>
    createData(mock.name, mock.image, mock.createdAt)
  );

  const handleClickEdit = () => {
      //TODO, acciones editar novedades 
  }

  const handleClickDelete = () => {
      //TODO, acciones para borrar novedades
  }

  return (
    <div>
      <Link to="/backoffice/news/create">Create news</Link>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Created At</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  <img src={row.image} alt="News_image" width="150em" />
                </TableCell>
                <TableCell align="right">{row.createdAt}</TableCell>
                <TableCell align="right">
                  <Button variant="outlined" style={{ marginRight: "1em" }} onClick={handleClickEdit}>
                    Edit
                  </Button>
                  <Button variant="outlined" color="error" onClick={handleClickDelete}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default NewsList;
