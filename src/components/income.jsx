import React, { useEffect, useState } from 'react';

import Input from './Input';

import './dashboard.css';
import axios from 'axios';

const Income = () => {
    // {to do when connecting the api}
    const [incomesDetails, setIncomesDetails] = useState([]);

    const [incomeDetails, setIncomeDetails] = useState({
        name: '',
        amount: ''
    });

    useEffect(() => {
        loadIncomes().then(r => console.log(loadIncomes()));
    }, []);

    const loadIncomes = async () => {
        const result = await axios.get('http://localhost:8080/api/incomes');
        setIncomesDetails(result.data);
        console.log(result.data);
    };

    const onExpenseChange = (newState) => {
        setIncomeDetails({ ...incomeDetails, ...newState });
    };

    return (
        <>
            <h1>INCOME DASHBOARD</h1>
            <section id="finance-table">
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

                    {
                        incomesDetails.map((income, index) => (

                            <div className="table-row" key={index + 1}>
                                <div>
                                    {income.name}
                                </div>
                                <div>
                                    R{income.value}
                                </div>
                                <div>
                                    <button>DELETE</button>
                                </div>
                            </div>

                        ))}

                </div>
            </section>
        </>
    );
};

export default Income;