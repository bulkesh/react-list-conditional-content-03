import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../Shared/Card";
import ExpensesFilter from './ExpensesFilter';
import './Expense.css';
const Expense = (props) => {

    // Set data for filter dropdown
    const [filterYear, setFilter] = useState('')
    const filterSelectionhandler = (filter) => {
        setFilter(filter);
    }

    // Filter the data based on Year selected from drop down.
    const expData = props.expenseData.filter(item => {
        if (filterYear === '') return props.expenseData;
        return (
            new Date(item.date).getFullYear().toString() === filterYear
        )
    });
    // Assign default value to render content if No data found on filter applied
    let exoensesContent = <h1>No Expense Data Found</h1>;
    // Reassign render data if filtered data found on filter applied.
    if (expData.length > 0) {
        exoensesContent = expData.map((expense, key) => (<ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount} />)
        )
    }
    return (
        <Card className="expenses">
            <ExpensesFilter selectedFilter={filterYear} onFilterSelect={filterSelectionhandler} />
            <div>
                {/* Render filtered data or No data message */}
                {exoensesContent}
            </div>
        </Card>

    )
}

export default Expense;