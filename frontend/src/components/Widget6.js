import React from 'react';

const lapnum = 58;

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
            //.then(elementts => console.log(elementts.MRData.RaceTable.Races))
            .then(drivers => this.setState({ items: drivers.MRData.RaceTable.Races }))
        // .then(drivers => console.log(drivers.MRData.RaceTable.Races))
    }

    render() {


        return (
            <div id='formw1bis' >
                <h1 className="liste"> Lap Time </h1>

                <div className='orgaw1'>
                    {/* slice(7, 8).*/}

                    {/* {this.state.items.map(items =>
                        <p className="liste" key={items.id} >

                            Pilote {items.Results} :


                        </p>)} */}

                    {this.state.items.map(items =>

                        items.Laps.map(driver =>

                            driver.Timings.slice(4, 5).map(time =>

                                <p className="liste" key={time.id} >



                                    Race: {items.raceName} <br></br><br></br>
                                    Lap: {driver.number} <br></br><br></br>
                                    Name: {time.driverId}   <br></br><br></br>
                                    {time.time} s


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