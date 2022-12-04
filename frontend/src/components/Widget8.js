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
            <div id='formw1bis' >
                <h1 className="liste"> Standings Constructor </h1>

                <div className='orgaw1'>
                    {/* slice(7, 8).*/}

                    {/* {this.state.items.map(items =>
                    <p className="liste" key={items.id} >

                        Pilote {items.Results} :


                    </p>)} */}

                    {this.state.items.map(items =>

                        items.ConstructorStandings.slice(2, 3).map(driver =>

                            <p className="liste" key={driver.id} >



                                Season: {items.season} <br></br>
                                Name: {driver.Constructor.name}  <br></br>
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

export default Widget8;