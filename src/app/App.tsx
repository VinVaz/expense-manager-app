import { useEffect, useState } from 'react';

import {
  apiGetAllExpenses,
} from '../api/apiService';

import {
  DISPLAY_OPTIONS,
} from '../constants/constants';

import Details from '../components/Details';
import FilterSelector from '../components/FilterSelector';
import TotalSum from '../components/TotalSum';

import { Container, Typography, Box, AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Summary from '../components/Summary';


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
  }
})


function App() {
  const [expenses, setExpenses] = useState([]);
  const [selectedDate, setSelectedDate] = useState('2020-01');
  const [displayOption, setDisplayOption] = useState(DISPLAY_OPTIONS.SUMMARY);

  const styleClass = useStyles()

  useEffect(() => {
    async function getExpenses() {
      const apiExpenses = await apiGetAllExpenses();
      setExpenses(apiExpenses);

    }
    getExpenses()
  }, []);
  

const filteredExpenses = !selectedDate ?
  expenses :
  expenses.filter((expense) => expense['mes'] ? String(expense['mes']) === selectedDate : 'false'
    );

  let sum = 0;
  filteredExpenses.forEach(expense => {
    sum += expense["valor"];
  })

  const getNumberFormat = (input: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(input);
  }

  return (
    <Container maxWidth="lg">
      <AppBar position="static">
        <Toolbar className={styleClass.header}>
          <Typography variant="h3" component="div">Expense Manager</Typography>
        </Toolbar>
      </AppBar>
      <Box className={styleClass.panel}>
        <FilterSelector setSelectedDate={setSelectedDate} selectedDate={selectedDate}/>
        <TotalSum>{getNumberFormat(sum)}</TotalSum>
      </Box>
      { displayOption === DISPLAY_OPTIONS.SUMMARY ?
       <Summary>{filteredExpenses}</Summary> : 
       <Details>{filteredExpenses}</Details>}
    </Container>
  );
}

export default App;
