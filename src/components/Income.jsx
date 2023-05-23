import React, { useState } from 'react';

import Input from './Input';
import Button from './Button';

import './income.css';

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
        <section id="income-table">
            <h1>INCOME PAGE</h1>
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
                    <div>
                        <Button name="Add"/>
                    </div>
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
                    <div>
                        <Button name="Delete"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Income;