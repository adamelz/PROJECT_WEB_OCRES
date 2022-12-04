import { extend } from 'lodash';
import React from 'react';


class Widget5 extends React.Component {

    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch("http://ergast.com/api/f1/current/driverStandings.json")
            .then(res => res.json())
            //.then(elementts => console.log(elementts.MRData.StandingsTable.StandingsLists))

            .then(drivers => this.setState({ items: drivers.MRData.StandingsTable.StandingsLists }))
        // .then(drivers => console.log(drivers.MRData.RaceTable.Races))
    }

    render() {
        return (
            <div id='formw1bis' >
                <h1 className="liste"> Standings Driver </h1>

                <div className='orgaw1'>
                    {/* slice(7, 8).*/}

                    {/* {this.state.items.map(items =>
                        <p className="liste" key={items.id} >

                            Pilote {items.Results} :


                        </p>)} */}

                    {this.state.items.map(items =>

                        items.DriverStandings.slice(3, 4).map(driver =>

                            <p className="liste" key={driver.id} >



                                Season: {items.season} <br></br>
                                Name: {driver.Driver.givenName}  {driver.Driver.familyName}  <br></br>
                                <h1>{driver.position} e</h1>

                                {/* {items.nationality} */}

                            </p>

                        )

                    )}



                </div >


            </div >
        );
    }
};

export default Widget5;