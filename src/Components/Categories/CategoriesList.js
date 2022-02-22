import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useSelector, shallowEqual } from "react-redux";
import { getCategoriesAction, searchCategoriesAction } from "../../Redux/actions/categoriesActions";
import {
  isFetchingCategoriesSel,
  categoriesSel,
  messageCategoriesSel,
  errorCategoriesSel,
} from "../../Redux/selector/selectorCategories";
import { sweetAlertConfirm } from "../../Services/sweetAlertServices";
import { deleteCategory } from "../../Services/categoriesService"

const CategoriesList = () => {
  const dispatch = useDispatch();
  //eslint-disable-next-line
  const isFetchingCategories = useSelector(
    isFetchingCategoriesSel,
    shallowEqual
  );
  const categories = useSelector(categoriesSel, shallowEqual);
  const messageCategories = useSelector(messageCategoriesSel, shallowEqual); //eslint-disable-line
  const errorCategories = useSelector(errorCategoriesSel, shallowEqual); //eslint-disable-line

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, []); //eslint-disable-line

  const handleDate = (fecha) => {
    const newDate = new Date(fecha);

    const opciones = {
      year: "numeric",
      month: "long",
      day: "2-digit",
    };

    return newDate.toLocaleDateString("es-ES", opciones);
  };

  const handleDelete = (id) => {
    sweetAlertConfirm(
      "Eliminar categoría",
      "Seguro quieres eliminar la categoría?"
    ).then((res) => {
      res && deleteCategory(id);
      setTimeout(() => {
        dispatch(getCategoriesAction());
      }, 2000);
    });
  };

  const handleUserSearch = (e) => {
    const { value } = e.target;
    if (value.length > 2) {
      dispatch(searchCategoriesAction(value));
    } else {
      dispatch(getCategoriesAction());
    }
  };

  return (
    <>
      <input
        type="search"
        name="search"
        onChange={(e) => handleUserSearch(e)}
      />
      <Link to="/create-category">Crear categoría</Link>
      <h1>Categorías</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Fecha de Creación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categories?.data.map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>{handleDate(category.created_at)}</td>
              {/* <td>
                <Link to={`/backoffice/categories/create/${category.id}`}>Editar</Link>
              </td> */}
              <td>
                <button onClick={() => handleDelete(category.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CategoriesList;
