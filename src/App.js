import React, {useState} from 'react';
import Expense from './Components/Expense/Expense';
import NewExpense from './Components/NewExpense/NewExpense';
import data from './utils/data.json';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState(data);
  const updateExpenseData = expense => {
    console.log("newExpenseData : ",expense);
    setExpenses((previousExpense) => {
      return {
        ...previousExpense,
        expense
      }
    })
  }
  return (
    <div>
      <NewExpense saveExpense = {updateExpenseData} />
      <Expense expenseData={expenses}/>
    </div>
  );
}

export default App;
