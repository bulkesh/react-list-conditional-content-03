import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    /* const [title,setTitle] = useState('');
    const [amount,setAmount] = useState('');
    const [date,setDate] = useState('');
     */
    const [formData, setFormData] = useState({
        title: '',
        amount: '',
        date: '',
    });
    const onTitleChange = (e) => {
        //setTitle(e.target.value);
        setFormData((prevState) => {
            return {
                ...prevState,
                title: e.target.value
            }
        });

    }
    const onAmountChange = (e) => {
        //setAmount(e.target.value);
        setFormData((prevState) => {
            return {
                ...prevState,
                amount: e.target.value
            }
        });
    }
    const onDateChange = (e) => {
        // setDate(e.target.value);
        setFormData((prevState) => {
            return {
                ...prevState,
                date: e.target.value
            }
        });
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        /* console.log("title : ",title);
        console.log("amount : ",amount);
        console.log("date : ",date); 
        console.log("formData : ", formData);*/
        props.onSaveExpense(formData);
        setFormData((prevState) => {
            return {
                ...prevState, title: '',
                date: '',
                amount: ''
            }
        })
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div className="new-expense__control">
                <div className="new-expense__control">
                    <title>Title</title>
                    <input type="text" value={formData.title} onChange={onTitleChange} />
                </div>
                <div className="new-expense__control">
                    <title>Amount</title>
                    <input type="number" value={formData.amount} min='0.00' onChange={onAmountChange} />
                </div>
                <div className="new-expense__control">
                    <title>Date</title>
                    <input type="date" value={formData.date} min='2019-01-02' max='2023-01-02' onChange={onDateChange} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Submit Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
