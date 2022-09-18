import React, { useState } from "react";
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isFormDisplay, setIsFormDisplay] = useState(false);
    const saveExpenseData = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: Math.random()
        }
        props.saveExpense(expenseData);
        setIsFormDisplay(false);
    }
    const addExpenseForm = () => {
        setIsFormDisplay(true);
    }
    const onCancelSubmit = () => {
        setIsFormDisplay(false);
    }

    // Initially show "Add New Expense" button and on click set "isFormDisplay" to true
    let expenseFormContent = (<div className="add-new-expense__actions">
        <button type="submit" onClick={addExpenseForm}>Add New Expense</button>
    </div>)
    // if "isFormDisplay" is true hide "Add New Expense" button and show expense form.
    if (isFormDisplay) {
        expenseFormContent = <ExpenseForm cancelSubmit={onCancelSubmit} onSaveExpense={saveExpenseData} />
    }
    return (
        <div className="new-expense">
            {expenseFormContent}
        </div>
    );
}

export default NewExpense;