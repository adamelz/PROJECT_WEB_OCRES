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
            .then(drivers => this.setState({ items: drivers.MRData.StandingsTable.StandingsLists }))
    }

    render() {
        return (
            <div id='carré' >
                <h3 className="liste"> Standings Driver </h3>

                <div className='orgaw1'>

                    {this.state.items.map(items =>

                        items.DriverStandings.slice(5, 6).map(driver =>

                            <p className="liste" key={driver.id} >


                                <br></br>

                                Season: <p id='italic'> {items.season}</p> <br></br><br></br>
                                <h1 className='data'>{driver.position} e</h1>

                                <br></br>

                                {/* <p id='nameposition'> {driver.Driver.familyName}</p> */}

                            </p>

                        )

                    )}



                </div >


            </div >
        );
    }
};

export default Widget5;