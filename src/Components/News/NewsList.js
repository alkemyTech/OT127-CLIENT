import React from 'react';
import { Link } from 'react-router-dom';
import '../CardListStyles.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const NewsList = () => {
    const newsMock = [
        {id: 2,  name: 'Titulo de prueba', image: '', description: 'Descripcion de prueba', createdAt:'26-01-2022'},
        {id: 1,  name: 'Titulo de prueba', image: '', description: 'Descripcion de prueba', createdAt:'26-01-2022'},
        {id: 3,  name: 'Titulo de prueba',image: '', description: 'Descripcion de prueba', createdAt:'26-01-2022'}
    ];

    function createData(name, image, createdAt, actions) {
        return { name, image, createdAt, actions };
      }

    const rows = newsMock.map(mock => createData(mock.name, mock.image,mock.createdAt))

    return (
        <div>
        <Link to='/backoffice/news/create'>Create news</Link>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell>Name</TableCell>
                <TableCell >Image</TableCell>
                <TableCell >Created At</TableCell>
                <TableCell >Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                    {row.name}
                    </TableCell>
                    <TableCell ><img src={row.image} alt='News_image'/></TableCell>
                    <TableCell >{row.createdAt}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}
 
export default NewsList;