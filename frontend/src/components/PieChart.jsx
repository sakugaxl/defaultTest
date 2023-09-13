import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import { legacy } from './data';

Chart.register(ArcElement);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            position: 'top',
        },
    },
};

const PieChart = ({ legacy }) => {

    return <Pie data={legacy} options={options} />;
};

export default PieChart;