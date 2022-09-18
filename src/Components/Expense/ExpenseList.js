import React from 'react';
import './ExpenseList.css';

const ExpenseList = props => {
    if (props.expenses.length === 0) {
        return (
            <h2>No Expense data found</h2>
        )
    }

    return (
        <ul>
            {props.expenses.map((expense, key) => (<ExpenseItem
                key={expense.id}
                date={expense.date}
                title={expense.title}
                amount={expense.amount} />)
            )}
        </ul>
    );

}
export default ExpenseList;