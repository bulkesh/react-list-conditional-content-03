import React from "react";
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseData = (newExpenseData) => {
       
        const expenseData = {
            ...newExpenseData,
            id:Math.random()
        }
        console.log("expenseData : ",expenseData);
        props.saveExpense(expenseData);
    }
    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpense={saveExpenseData}/>
        </div>
    );
}

export default NewExpense;