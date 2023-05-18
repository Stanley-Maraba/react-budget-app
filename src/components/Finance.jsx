import React, { useState } from 'react';

import Input from './Input';

import './dashboard.css';

const Finance = () => {

    return (
        <>
            <h1>BUDGET DASHBOARD</h1>
            <section id="expense-table">
                <div>
                    <div>
                        <div>Total Income</div>
                        <div>Total Expenses</div>
                        <div>What you left with</div>
                    </div>

                    <div>
                        <div>
                            R4000
                        </div>
                        <div>
                            R6000
                        </div>
                        <div>
                            R4000
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Finance;