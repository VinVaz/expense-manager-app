import axios from 'axios';

export async function apiGetAllExpenses() {
  const { data } = await axios.get('http://localhost:3001/despesas');
  return data;
}

export async function apiGetExpensesFrom(month, day) {
  // prettier-ignore
  const { data } = 
    await axios.get(`http://localhost:3001/despesas?mes=${month}&_sort=${day}`);

  return data;
}
