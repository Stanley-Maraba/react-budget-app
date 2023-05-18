import React, { useState } from 'react';

import Input from './Input';

import './dashboard.css';

const Income = () => {

    const [incomeDetails, setIncomeDetails] = useState({
        name: '',
        amount: ''
    });

    const onExpenseChange = (newState) => {
        setIncomeDetails({ ...incomeDetails, ...newState });
    };

    return (
        <>
            <h1>INCOME DASHBOARD</h1>
            <section id="expense-table">
                <h2>ADDING MY INCOME</h2>
                <div>
                    <div>
                        <div>Name</div>
                        <div>Amount</div>
                    </div>

                    <div>
                        <div>
                            <Input id="name" onChange={onExpenseChange} value={incomeDetails.name}/>
                        </div>
                        <div>
                            <Input id="amount" onChange={onExpenseChange} value={incomeDetails.amount} type="number"/>
                        </div>
                        <div>
                            <button>add</button>
                        </div>
                    </div>
                </div>

                <h2>List of All My Income</h2>
                <div>
                    <div>
                        <div>Name</div>
                        <div>Amount</div>
                    </div>
                    <div className="table-row">
                        <div>
                            manginya
                        </div>
                        <div>
                            30000
                        </div>
                        <div>
                            <button>DELETE</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Income;