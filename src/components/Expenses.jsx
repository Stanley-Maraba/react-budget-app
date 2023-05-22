import React, { useState } from 'react';

import Input from './Input';
import Button from './Button';

import './dashboard.css';

const Expenses = () => {

    // to do when connecting the api
    const [expensesDetails] = useState({
        name: 'food',
        amount: '6000'
    });

    const [expenseDetails, setExpenseDetails] = useState({
        name: '',
        amount: ''
    });

    const onExpenseChange = (newState) => {
        setExpenseDetails({ ...expenseDetails, ...newState });
    };

    return (
        <section id="finance-table">
            <h1>EXPENSE DASHBOARD</h1>
            <h2>ADDING MY EXPENSES</h2>
            <div>
                <div>
                    <span>Name</span>
                    <span>Amount</span>
                </div>

                <div>
                    <div>
                        <Input id="name" onChange={onExpenseChange} value={expenseDetails.name}/>
                    </div>
                    <div>
                        <Input id="amount" onChange={onExpenseChange} value={expenseDetails.amount} type="number"/>
                    </div>
                    <div>
                        <Button name="ADD"/>
                    </div>
                </div>
            </div>

            <h2>List of All My Expenses</h2>
            <div>
                <div>
                    <span>Name</span>
                    <span>Amount</span>
                </div>
                <div>
                    <span>{expensesDetails.name}</span>
                    <span>{expensesDetails.amount}</span>
                    <span>
                        <Button name="DELETE"/>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Expenses;