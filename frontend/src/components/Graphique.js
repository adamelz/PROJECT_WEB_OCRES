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
            // backgroundColor: [
            //     'rgb(0, 161, 156, 0.2)',
            //     'rgba(54, 162, 235, 0.2)',
            //     'rgba(255, 206, 86, 0.2)',
            //     'rgba(75, 192, 192, 0.2)',
            //     'rgba(153, 102, 255, 0.2)',
            //     'rgba(255, 159, 64, 0.2)',
            // ],
            // borderColor: [
            //     'rgba(255, 99, 132, 1)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)',
            //     'rgba(255, 159, 64, 1)',
            // ],
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




