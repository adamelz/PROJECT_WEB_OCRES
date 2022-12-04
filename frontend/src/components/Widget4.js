import React, { useEffect, useState } from 'react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, ArcElement, Tooltip, Legend, } from 'chart.js';
import { affichagestanding } from '../drivers';
import { affichagedonut } from '../drivers';

ChartJS.register(ArcElement, Tooltip, Legend)

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,

)



const Widget4 = () => {

    const [newdata, setNewdata] = useState([]);
    const [position, setPosition] = useState([]);


    const fetchApi = async () => {

        const newdata = await affichagestanding();
        const position = await affichagestanding();
        setNewdata(newdata);
        console.log(newdata.map((data) => data[0].year));

    };

    useEffect(() => {

        fetchApi();

    }, []);


    const datas = {

        labels: newdata.map((data) => data[0].year),

        datasets: [{
            label: "test",
            data: newdata.map((data) => data[0].value),
            //data: ["8", "12", "3", "9", "8", "12", "9"],
            backgroundColor: 'rgb(0, 161, 156)',
            borderColor: 'rgb(0, 161, 156)',
            with: '100%',
            height: '100%',
            // backgroundColor: [
            //     'rgba(255, 99, 132, 0.2)',
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

        }
        ]
    };

    const options = {};


    return (
        <div id="formw3">

            <Line data={datas} options={options}> </Line>
            {/* <Doughnut data={data} options={options}> </Doughnut> */}
            {/* <Doughnut className='donuts' data={datas} options={options}> </Doughnut> */}
        </div>
    );
};

export default Widget4;







