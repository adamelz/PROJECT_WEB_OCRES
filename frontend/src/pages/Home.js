import React from 'react';
import Navigation from '../components/Navigation';
import image from './logomercedes.png';
import Dashboards from '../components/Dashboards';
import Slider from '../components/Slider';
import Graphique from '../components/Graphique';
console.log(image);

const Home = () => {
    return (
        <div>
            <Navigation />
            {/* <a href='#ancre'>
                <h1> Home </h1>
            </a> */}

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