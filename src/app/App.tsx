import React from 'react';
import { Switch, Route, Redirect, useParams, useHistory} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { carregaTodasAsDespesas, IExpense } from '../helpers/backend';
import { getNumberFormat } from '../helpers/currencyFormat';

import FilterSelector from '../components/FilterSelector';
import Main from '../components/Main';

import TotalSum from '../components/TotalSum';

import { Container, Typography, Box, AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { getMonthlyExpensesPerCategory, getMonthlyExpenses, getTotalExpenses } from '../helpers/expensesFormat'

const useStyles = makeStyles({
  panel: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '2rem 0 2rem 0',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    color: '#202020',
    backgroundColor: '#eaeaea',
  },
  datePicker: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#fafafa',
  },
});

function App() {
  const [expenses, setExpenses] = useState<IExpense[]>([]);
  const styleClass = useStyles();
  const history = useHistory();

  function onChangeYearMonth(yearMonth: string) {
    history.push(`/despesas/${yearMonth}`)
  }
  
  const {anoMes} = useParams<{anoMes:string}>();
  const yearMonth = anoMes;

  const filteredExpenses:IExpense[] = !anoMes
  ? expenses
  : expenses.filter((expense:IExpense) =>
      expense['mes'] ? expense['mes'] === anoMes : 'false'
    );


  useEffect(()=>{
    carregaTodasAsDespesas().then((res)=>{
      console.log(res)
      setExpenses(res)
    })
  }, [])

  return (
    <React.Fragment>
      <Switch>
        <Route path="/despesas/:anoMes">
          <Container maxWidth="lg">
            <AppBar position="static">
              <Toolbar className={styleClass.header}>
                <Typography variant="h3" component="div">
                  Expense Manager
                </Typography>
              </Toolbar>
            </AppBar>
            <Box>
              <TotalSum total={getNumberFormat(getTotalExpenses(filteredExpenses))} />
            </Box>
            <Box className={styleClass.panel}>
              <Box flex="1">
                <FilterSelector
                    yearMonth={yearMonth}
                    onChangeYearMonth={onChangeYearMonth}
                  />
              </Box>
              <TotalSum total={getNumberFormat(getMonthlyExpenses(filteredExpenses))} />
            </Box>
            <Main
              filteredExpenses={filteredExpenses}
            />
          </Container>
        </Route>
      </Switch>
      <Redirect to="/despesas/2021-06" />
    </React.Fragment>
  );
}

export default App;
