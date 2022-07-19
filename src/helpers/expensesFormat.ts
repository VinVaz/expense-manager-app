
import { IExpense } from './backend'

function getMonthlyExpensesPerCategory(expenses: IExpense[]) {
  return expenses.reduce((object: any, item:IExpense) => {
    let categoria = String(item['categoria']);
    let valor = item['valor'];
    if (!object.hasOwnProperty(categoria)) {
      object[categoria] = 0;
    }

    object[categoria] += valor;
    return object;
  }, {});
}

function getMonthlyExpenses(expenses: IExpense[]):number {
  let monthlyExpenses:number = 0;
  expenses.forEach((expense:IExpense) => {
    monthlyExpenses += Number(expense['valor']);
  });
  return monthlyExpenses;
}
function getTotalExpenses(expenses:IExpense[]):number {
  let totalExpenses:number = 0;
  expenses.forEach((expense:IExpense) => {
    totalExpenses += Number(expense['valor']);
  });
  return totalExpenses;
}

export { getMonthlyExpensesPerCategory, getMonthlyExpenses, getTotalExpenses };
