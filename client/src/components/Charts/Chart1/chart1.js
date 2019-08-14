import React from 'react';
import Header from '../Headers/Header';
import Chart from './Chart.js';

import '../charts.scss';

export default function Chart1() {
    return (
        <div className="Chart">
            <Header title = "Chart 1" color = '#AADAFF'/>
            <Chart />
        </div>
    );
}