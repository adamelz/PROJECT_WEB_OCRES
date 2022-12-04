import React from 'react';
import Navigation from '../components/Navigation';
import Dashboards from '../components/Dashboards';
import Naviagationl from '../components/Naviagationl';
import Graphique from '../components/Graphique';




const Dashboard = () => {
    return (
        <div id="disposition2" >

            <Naviagationl />


            <div id="dash">



                <Dashboards>
                </Dashboards>



            </div>

        </div>
    );
};

export default Dashboard;