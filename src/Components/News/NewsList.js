import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getNews,
  getNewSearch,
  getNewSearchCategory,
} from "../../Redux/reducers/newsSlice";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../Services/categoriesService";
import Spinner from "../Spinner/Spinner";
import SearchForm from "./SearchForm";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const NewsList = () => {
  const [value, setValue] = useState("");
  const [select, setSelect] = useState(0);
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();
  const news = useSelector((state) => state.newsReducer.news.data);

  useEffect(() => {
    getAllCategory().then((res) => setCategories(res.data));
  }, []);

  useEffect(() => {
    if (select !== 0) {
      dispatch(getNewSearchCategory({ select, value }));
    } else if (value.length > 0) {
      dispatch(getNewSearch(value));
    } else {
      dispatch(getNews());
    }
  }, [value, select]);

  const handleClickEdit = () => {
    //TODO, acciones editar novedadesss
  };

  const handleClickDelete = (id) => {
    //TODO, acciones editar novedadesss
  };

  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  const handleSearch = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="table">
      <div className="table__container">
        <div className="table__actions">
          <TextField
            type="search"
            name="Buscar Novedad"
            size="small"
            label="Buscar Novedad"
            placeholder="Escribe algo"
            onChange={(e) => handleSearch(e)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <span className="material-icons">
                    search
                  </span>
                </InputAdornment>
              ),
            }}
          />
          <FormControl>
            <InputLabel>Categorías</InputLabel>
            <Select
              label="Categorías"
              autoWidth
              size="small"
              onChange={handleChange}
              value={select}
            >
              <MenuItem value={0}>Todos</MenuItem>
              {categories.map(({ id, name }) => (
                <MenuItem key={id} value={id}>{name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Link className="table__link" to="/backoffice/news/create">
            Crear Novedad
          </Link>
        </div>
        {!news ? (
          <Spinner />
        ) : (
          <table className="table__data">
            <thead className="table__head">
              <tr className="table__row">
                <th className="table__title">Nombre</th>
                <th className="table__title">Imagen</th>
                <th className="table__title-edit">Editar</th>
                <th className="table__title-delete">Eliminar</th>
              </tr>
            </thead>
            <tbody className="table__body">
              {news.map((element) => (
                <tr key={element.id} className="table__row">
                  <td className="table__cell">{element.name}</td>
                  <td className="table__cell">
                    <img src={element.image} alt="News_image" width="100" />
                  </td>
                  <td className="table__cell-edit">
                    <button className="table__edit" onClick={handleClickEdit}>
                      Editar
                    </button>
                  </td>
                  <td className="table__cell-delete">
                    <button
                      className="table__delete"
                      onClick={handleClickDelete}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default NewsList;
