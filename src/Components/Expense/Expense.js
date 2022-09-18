import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../Shared/Card";
import ExpensesFilter from './ExpensesFilter';
import './Expense.css';
const Expense = (prop) => {
    const [filter, setFilter] = useState('2022')
    const filterSelectionhandler = (filter) =>{
        console.log("Expense : ",filter);
        setFilter(filter);
    }
    return (
        <Card className="expenses">
            <ExpensesFilter selectedFilter={filter} onFilterSelect={filterSelectionhandler}/>
            <div>
                <ExpenseItem date={prop.expenseData[0].date} title={prop.expenseData[0].title} amount={prop.expenseData[0].amount} />
                <ExpenseItem date={prop.expenseData[1].date} title={prop.expenseData[1].title} amount={prop.expenseData[1].amount} />
                <ExpenseItem date={prop.expenseData[2].date} title={prop.expenseData[2].title} amount={prop.expenseData[2].amount} />
                <ExpenseItem date={prop.expenseData[3].date} title={prop.expenseData[3].title} amount={prop.expenseData[3].amount} />
            </div>
        </Card>

    )
}

export default Expense;