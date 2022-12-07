import React from 'react';

const lapnum = 45;

class Widget6 extends React.Component {

    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch(`http://ergast.com/api/f1/2022/22/laps/${lapnum}.json`)
            .then(res => res.json())
            .then(drivers => this.setState({ items: drivers.MRData.RaceTable.Races }))
    }

    render() {


        return (
            <div id='carré' >
                <h3 className="liste"> Lap Time </h3>

                <br></br>
                <div className='orgaw1'>



                    {this.state.items.map(items =>

                        items.Laps.map(driver =>

                            driver.Timings.slice(2, 3).map(time =>

                                <p className="liste" key={time.id} >



                                    <p id='italic'> {items.raceName}</p>
                                    Lap: {driver.number} <br></br><br></br>
                                    <h1 className="data" > {time.time}s </h1> <br></br><br></br>


                                    {/* <p id='nameposition' >{time.driverId} </p> */}


                                </p>


                            )



                        )

                    )}



                </div >


            </div >
        );
    }
};

export default Widget6;