import React, { useState } from 'react';

import Input from './Input';

import './dashboard.css';

const Expenses = () => {

    const [expenseDetails, setExpenseDetails] = useState({
        name: '',
        amount: ''
    });

    const onExpenseChange = (newState) => {
        setExpenseDetails({ ...expenseDetails, ...newState });
    };

    return (
        <>
            <h1>EXPENSE DASHBOARD</h1>
            <section id="expense-table">
                <h2>ADDING MY EXPENSES</h2>
                <div>
                    <div>
                        <div>Name</div>
                        <div>Amount</div>
                    </div>

                    <div>
                        <div>
                            <Input id="name" onChange={onExpenseChange} value={expenseDetails.name}/>
                        </div>
                        <div>
                            <Input id="amount" onChange={onExpenseChange} value={expenseDetails.amount} type="number"/>
                        </div>
                        <div>
                            <button>add</button>
                        </div>
                    </div>
                </div>

                <h2>List of All My Expenses</h2>
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

export default Expenses;