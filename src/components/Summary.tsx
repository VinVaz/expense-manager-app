import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { useEffect } from 'react';

import { IExpense } from '../helpers/backend';
import {getMonthlyExpensesPerCategory} from '../helpers/expensesFormat'

interface IExpensesTableProps {
  expenses: IExpense[];
}

export default function Summary(props:IExpensesTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Categoria</TableCell>
            <TableCell align="right">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(getMonthlyExpensesPerCategory(props.expenses)).map((key, index) => (
            <TableRow
              key={index}
              
            >
              <TableCell component="th" scope="row">
                {String(key)}
              </TableCell>
              <TableCell align="right">{getMonthlyExpensesPerCategory(props.expenses)[key]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
