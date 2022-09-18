import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = props => {
    const expenses = props.expenses; 
     // Assign default value to render content if No data found on filter applied
    if (expenses.length === 0) {
        return (
            <h2 className='expenses-list__fallback'>No Expense data found</h2>
        )
    }
    // Reassign render data if filtered data found on filter applied.
    return (
        <ul className='expenses-list'>
            {expenses.map(expense => (<ExpenseItem
                key={expense.id}
                date={expense.date}
                title={expense.title}
                amount={expense.amount} />)
            )}
        </ul>
    );

}
export default ExpenseList;