import React from 'react';

class Widget1 extends React.Component {

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
            .then(drivers => console.log(drivers.MRData.RaceTable.Races))

    }


    render() {

        return (
            <div id='carré' >
                <h3 className="liste"> Last Position </h3>

                <div className='orgaw1'>

                    {this.state.items.map(items =>

                        items.Results.slice(17, 18).map(driver =>

                            <p className="liste" key={driver.id} >


                                <br></br>
                                Race: <p id='italic'> {items.raceName} </p> <br></br><br></br>
                                <h1 className='data'> {driver.position} e</h1>

                                {/* <p id='nameposition'> {driver.Driver.givenName}  {driver.Driver.familyName} </p> */}


                            </p>

                        )

                    )}



                </div >


            </div >
        )
    }

};

export default Widget1;














