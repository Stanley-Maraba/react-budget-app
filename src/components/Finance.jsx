import React, { useState } from 'react';

import Input from './Input';

import './dashboard.css';

const Finance = () => {

    return (
        <section id="finance-table">
            <h1>BUDGET DASHBOARD</h1>
            <div>
                <div>
                    <span>Total Income</span>
                    <span>Total Expenses</span>
                    <span>What you left with</span>
                </div>

                <div>
                    <span>R4000</span>
                    <span>R6000</span>
                    <span>R4000</span>
                </div>
            </div>
        </section>
    );
};

export default Finance;