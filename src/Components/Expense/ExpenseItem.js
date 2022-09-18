import React from 'react';
import Card from '../Shared/Card';
import DateWidgit from '../Shared/DateWidgit';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <DateWidgit date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">₹{props.amount}</div>
            </div>
           
        </Card>
    )
};

export default ExpenseItem;