import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { IExpense } from '../helpers/backend';


export default function Details(props: { expenses: IExpense[] }) {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Despesa</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell>Mês</TableCell>
            <TableCell>Dia</TableCell>
            <TableCell align="right">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.expenses.map((expense) => (
            <TableRow
              key={expense.id}
              
            >
              <TableCell component="th" scope="row">
                {expense.descricao}
              </TableCell>
              <TableCell>{expense.categoria}</TableCell>
              <TableCell>{expense.mes}</TableCell>
              <TableCell>{expense.dia}</TableCell>
              <TableCell align="right">{expense.valor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
