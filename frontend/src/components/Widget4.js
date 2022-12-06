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
            label: "Classement",
            data: newdata.map((data) => data[0].value),
            backgroundColor: 'rgb(0, 161, 156)',
            borderColor: 'rgb(0, 161, 156)',
            with: '100%',
            height: '100%',
            borderWidth: 1,

        }
        ]
    };

    const options = {};


    return (
        <div id="formw3">

            <p className="liste"> Standing Evolution (year)  </p>


            <Line data={datas} options={options}> </Line>
            {/* <Doughnut data={data} options={options}> </Doughnut> */}
            {/* <Doughnut className='donuts' data={datas} options={options}> </Doughnut> */}
        </div>
    );
};

export default Widget4;







