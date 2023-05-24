import React, { useState } from 'react';

import './dashboard.css';

const Dashboard = () => {

    return (
        <section id="dashboard">
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

export default Dashboard;