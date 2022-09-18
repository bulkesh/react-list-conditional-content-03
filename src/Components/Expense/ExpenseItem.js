import React, {useState} from 'react';
import Card from '../Shared/Card';
import DateWidgit from '../Shared/DateWidgit';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const clickHandler = (e) => {
        console.log("Click: ", e);
        setTitle('Updated Title');
    }
    return (
        <Card className="expense-item">
            <DateWidgit date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">₹{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Click Me!!</button>
        </Card>
    )
};

export default ExpenseItem;