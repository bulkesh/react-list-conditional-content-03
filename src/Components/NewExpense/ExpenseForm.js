import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [isFormEmpty, setIsFormEmpty] = useState(false);
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
        setIsFormEmpty(false);
        setFormData((prevState) => {
            return {
                ...prevState,
                title: e.target.value
            }
        });

    }
    const onAmountChange = (e) => {
        //setAmount(e.target.value);
        setIsFormEmpty(false);
        setFormData((prevState) => {
            return {
                ...prevState,
                amount: e.target.value
            }
        });
    }
    const onDateChange = (e) => {
        // setDate(e.target.value);
        setIsFormEmpty(false);
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
        if (!formData.date || !formData.amount || !formData.title) {
            setIsFormEmpty(true);
            return;
        }

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

            {
                isFormEmpty ? <h3>* Please fill the form befor add expense.</h3> : ''
            }

            <div className="new-expense__actions">
                <button onClick={props.cancelSubmit}>Cancel</button>
                <button type="submit">Submit Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
