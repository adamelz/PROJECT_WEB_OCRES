import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, ArcElement, Tooltip, Legend, } from 'chart.js';
import { affichagestanding } from '../drivers';

ChartJS.register(ArcElement, Tooltip, Legend)

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,

)



const Widget4 = () => {

    const [newdata, setNewdata] = useState([]);


    const fetchApi = async () => {

        const newdata = await affichagestanding();
        setNewdata(newdata);
        console.log(newdata.map((data) => data[0].year));

    };

    useEffect(() => {

        fetchApi();

    }, []);


    const datas = {

        labels: newdata.map((data) => data[0].year),

        datasets: [{
            label: "Standing",
            data: newdata.map((data) => data[0].value),
            backgroundColor: 'rgb(0, 161, 156, 0.2)',
            borderColor: 'rgb(0, 161, 156)',
            with: '100%',
            height: '100%',
            borderWidth: 1,

        }
        ]
    };

    const options = {};


    return (
        <div id="w2">

            <p className="liste"> Standing Evolution (year)  </p>


            <Line data={datas} options={options}> </Line>
        </div>
    );
};

export default Widget4;







