import React from 'react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, } from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,

)



function Graphique() {

    const data = {

        labels: ["Course 1", "Course 2", "Course 3", "Course 4", "Course 5", "Course 6", "Course 7"],

        datasets: [{
            data: ["8", "12", "3", "9", "8", "12", "9"],
            label: "test",
            backgroundColor: 'rgb(0, 161, 156)',
            borderColor: 'rgb(0, 161, 156)',
            with: '400px',
            height: '400px',
            borderWidth: 1,
        }]
    };

    const options = {};

    return (
        <div id="graphe">

            <Line data={data} options={options}> </Line>
        </div>
    );
}

export default Graphique;




