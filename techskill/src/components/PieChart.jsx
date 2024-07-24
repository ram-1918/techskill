import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      display: false
    },
    title: {
      display: true,
      text: 'Skill Check Score Breakdown',
    },
    datalabels: {
      color: 'black',
      anchor: 'end',
      align: 'start',
      offset: 10,
      borderRadius: 15,
      backgroundColor: (context) => {
        return context.dataset.backgroundColor;
      },
      font: {
        weight: 'bold',
        size: '12',
      },
      formatter: (value, context) => {
        return `${value}%`; // ${context.chart.data.labels[context.dataIndex]}: 
      },
    }
  },
};

export const data = {
  labels: ['Bachelors Degree', 'Aptitude', "Assessment's average", 'Certifications', 'Personality Developement'],
  datasets: [
    {
      label: 'Weightage',
      data: [41.5, 7.8, 16.5, 6, 9.2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.9)',
        'rgba(54, 162, 235, 0.9)',
        'rgba(255, 206, 86, 0.9)',
        'rgba(75, 192, 192, 0.9)',
        'rgba(153, 102, 255, 0.9)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
      radius: "80%",
      cutout: "30%"
    },
  ],
};

const PieChart = () => {
  return <Pie data={data} options={options} />;
}

export default PieChart;
