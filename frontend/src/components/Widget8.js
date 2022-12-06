import React from 'react';


class Widget8 extends React.Component {

    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch("http://ergast.com/api/f1/current/constructorStandings.json")
            .then(res => res.json())
            //.then(elementts => console.log(elementts.MRData.StandingsTable.StandingsLists))
            .then(drivers => this.setState({ items: drivers.MRData.StandingsTable.StandingsLists }))
        //.then(drivers => console.log(drivers.MRData.StandingsTable.StandingsLists))
    }

    render() {

        return (
            <div id='carré' >
                <h3 className="liste"> Standings Constructor </h3>

                <br></br>
                <div className='orgaw1'>


                    {this.state.items.map(items =>

                        items.ConstructorStandings.slice(2, 3).map(driver =>

                            <p className="liste" key={driver.id} >



                                Season: <p id='italic'>{items.season}</p> <br></br>
                                <h1 className='data'>{driver.position} e</h1><br></br><br></br>


                                {/* <p id='nameposition'> {driver.Constructor.name}</p> */}


                            </p>

                        )

                    )}



                </div >


            </div >
        );
    }
};

export default Widget8;