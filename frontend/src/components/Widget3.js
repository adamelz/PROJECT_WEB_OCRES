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
            <div id='formw7'>

                <h2 className="liste"> Speed Last race</h2>

                <div className='orgaw1'>

                    {this.state.items.map(items =>

                        items.Results.slice(17, 18).map(driver =>


                            <p className="liste" key={driver.id} >


                                <br></br>
                                Race: {items.raceName} <br></br>
                                <h1 className='data'>{driver.FastestLap.AverageSpeed.speed} </h1> {driver.FastestLap.AverageSpeed.units} in lap <h1 className='data'>{driver.FastestLap.lap} </h1>
                                <p id='nameposition'>{driver.Driver.givenName} {driver.Driver.familyName}</p>

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