import React from 'react';


//http://ergast.com/api/f1/drivers/russell/driverStandings.json






class Widget7 extends React.Component {

    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch("http://ergast.com/api/f1/drivers/russell/driverStandings.json")
            .then(res => res.json())
            .then(drivers => this.setState({ items: drivers.MRData.StandingsTable.StandingsLists }))
        // .then(drivers => console.log(drivers.MRData.StandingsTable.StandingsLists))

        // .then(drivers => this.map.set({ items: drivers.MRData.DriverTable.Drivers })) 
    }


    render() {

        return (
            <div id='formw1bis' >
                <h1 className="liste"> Standings </h1>

                <div className="orgaw1">

                    {this.state.items.map(items =>

                        items.DriverStandings.map(driver =>

                            <li className="liste" key={items.id} >


                                <br></br>
                                Season: {items.season} <br></br>
                                Position de {driver.Driver.givenName}  {driver.Driver.familyName} : <p> {driver.position} e</p>

                                {/* {items.nationality} */}

                            </li>

                        )

                    )
                    }
                </div >


            </div >
        );
    }
};

export default Widget7;