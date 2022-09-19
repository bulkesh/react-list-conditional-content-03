import React, { useState } from 'react';
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
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
   
    return (
        <Card className="expenses">
            <ExpensesFilter selectedFilter={filterYear} onFilterSelect={filterSelectionhandler} />
            <ExpenseChart chartData={expData}/>
            <div>
                {/* Render filtered data or No data message */}
               <ExpenseList expenses={expData} />
            </div>
        </Card>

    )
}

export default Expense;