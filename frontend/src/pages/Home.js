import React from 'react';
import Navigation from '../components/Navigation';
import image from './logomercedes.png';
import Dashboards from '../components/Dashboards';
import Slider from '../components/Slider';
console.log(image);

const Home = () => {
    return (
        <div>
            <Navigation />

            <br></br>

            <div>
                <Slider>
                </Slider>
            </div>

            <br />

            <div id='center'>

                <Dashboards>
                </Dashboards>
            </div>




        </div >

    );
};

export default Home;