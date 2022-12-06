import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';



class Widget2 extends React.Component {

    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch("http://ergast.com/api/f1/2022/drivers.json")
            .then(res => res.json())
            //.then(drivers => this.setState({ items: drivers.MRData.DriverTable }))
            // .then(drivers => console.log(drivers.MRData.DriverTable.Drivers))
            .then(drivers => this.setState({ items: drivers.MRData.DriverTable.Drivers }))
    }


    render() {
        return (
            <div id="formw3">
                <h1 className="liste"> Nationality </h1>

                <div className='orgaw1'>

                    {this.state.items.slice(5, 6).map(items =>


                        <p className="liste" key={items.id} >

                            {items.nationality}

                        </p>



                    )}



                </div >

            </div>
        );
    }
};

export default Widget2;