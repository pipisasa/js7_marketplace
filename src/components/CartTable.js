import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  },
});

export default function CartTable({ rows }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Sale price</TableCell>
            <TableCell align="right">Count</TableCell>
            <TableCell align="right">total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.salePrice}</TableCell>
              <TableCell align="right">{row.count || 1}</TableCell>
              <TableCell align="right">{(row.salePrice || row.price) * (row.count || 1)}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell component="th" scope="row">
              Total price
            </TableCell>
            <TableCell>
              {rows.reduce((total, item)=>{
                return total + (item.salePrice || item.price)*(item.count || 1)
              }, 0)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}