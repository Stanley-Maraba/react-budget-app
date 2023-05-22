import React, { useState } from 'react';

import Input from './Input';
import Button from './Button';

import './dashboard.css';

const Income = () => {
    // {to do when connecting the api}
    const [incomesDetails] = useState({
        name: 'ubereats',
        amount: '5000'
    });

    const [incomeDetails, setIncomeDetails] = useState({
        name: '',
        amount: ''
    });

    const onExpenseChange = (newState) => {
        setIncomeDetails({ ...incomeDetails, ...newState });
    };

    return (
        <section id="finance-table">
            <h1>INCOME DASHBOARD</h1>
            <h2>ADDING MY INCOME</h2>
            <div>
                <div>
                    <span>Name</span>
                    <span>Amount</span>
                </div>

                <div>
                    <div>
                        <Input id="name" onChange={onExpenseChange} value={incomeDetails.name}/>
                    </div>
                    <div>
                        <Input id="amount" onChange={onExpenseChange} value={incomeDetails.amount} type="number"/>
                    </div>
                    <span>
                    <Button name="ADD"/>
                    </span>
                </div>
            </div>

            <h2>List of All My Income</h2>
            <div>
                <div>
                    <span>Name</span>
                    <span>Amount</span>
                </div>
                <div>
                    {/*{ to do when connecting the api}*/}
                    <span>{incomesDetails.name}</span>
                    <span>{incomesDetails.amount}</span>
                    <span>
                        <Button name="DELETE"/>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Income;