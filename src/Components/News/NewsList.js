import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { getNews } from "../../Redux/reducers/newsSlice";
import { getFilteredNews } from "../../Services/newsService";
import { useSelector, useDispatch } from "react-redux";
import SearchForm from "./SearchForm";

const NewsList = () => {
  const dispatch = useDispatch();
  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    dispatch(getNews());
  }, []); //eslint-disable-line

  const news = useSelector((state) => state.newsReducer.news.data);

  const handleClickEdit = () => {
    //TODO, acciones editar novedades
  };

  const handleClickDelete = () => {
    //TODO, acciones para borrar novedades
  };

  const newsMap = () => {
    return news.length
      ? news.map((element) => (
          <TableRow
            key={element.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {element.name}
            </TableCell>
            <TableCell align="right">
              <img src={element.image} alt="News_image" width="150em" />
            </TableCell>
            <TableCell align="right">{element.created_at}</TableCell>
            <TableCell align="right">
              <Button
                variant="outlined"
                style={{ marginRight: "1em" }}
                onClick={handleClickEdit}
              >
                Edit
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={handleClickDelete}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))
      : null;
  };

  const filteredNewsMap = () => {
    return filteredNews.length
      ? filteredNews.map((element) => (
          <TableRow
            key={element.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {element.name}
            </TableCell>
            <TableCell align="right">
              <img src={element.image} alt="News_image" width="150em" />
            </TableCell>
            <TableCell align="right">{element.created_at}</TableCell>
            <TableCell align="right">
              <Button
                variant="outlined"
                style={{ marginRight: "1em" }}
                onClick={handleClickEdit}
              >
                Edit
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={handleClickDelete}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))
      : null;
  };

  const searchNews = async (event) => {
    //Ésta función hace la búsqueda de novedades y setea un estado con las noticias filtradas
    if (event.target.value.length >= 3) {
      let data = await getFilteredNews(event.target.value);
      setFilteredNews(data);
    } else {
      setFilteredNews(news);
    }
  };

  return (
    <div>
      <Link to="/backoffice/news/create">Create news</Link>
      <SearchForm searchNews={searchNews}></SearchForm>
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
            {filteredNews.length ? filteredNewsMap() : newsMap()}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default NewsList;
