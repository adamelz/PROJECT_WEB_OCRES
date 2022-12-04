import React from 'react';
import Graphique from './Graphique';


class Widget3 extends React.Component {


    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch("http://ergast.com/api/f1/current/last/results.json")
            .then(res => res.json())
            .then(drivers => this.setState({ items: drivers.MRData.RaceTable.Races }))
        // .then(drivers => console.log(drivers.MRData.RaceTable.Races))

        // .then(drivers => this.map.set({ items: drivers.MRData.DriverTable.Drivers })) 
    }


    render() {
        return (
            <div id='formw2'>

                <h1>  Speed Last race</h1>

                <div className='orgaw1'>

                    {this.state.items.map(items =>

                        items.Results.slice(4, 5).map(driver =>


                            <p className="liste" key={driver.id} >


                                <br></br>
                                Race: {items.raceName} <br></br>
                                <h1>{driver.FastestLap.AverageSpeed.speed} </h1> {driver.FastestLap.AverageSpeed.units} in lap <h1>{driver.FastestLap.lap} </h1>
                                For: {driver.Driver.givenName} {driver.Driver.familyName}

                            </p>

                        )

                    )}



                </div >

                {/* <Graphique id="size">
            </Graphique> */}
            </div>
        );
    }
};

export default Widget3;