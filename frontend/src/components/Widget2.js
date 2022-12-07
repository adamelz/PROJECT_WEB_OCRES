import React from 'react';
import image from '../assets/img/flag.png'



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
            .then(drivers => this.setState({ items: drivers.MRData.DriverTable.Drivers }))
    }


    render() {
        return (
            <div id="w3">
                <h2 className="liste"> Nationality </h2>

                <br />
                <div className='orgaw1'>

                    {this.state.items.slice(5, 6).map(items =>


                        <p className="liste" key={items.id} >

                            <p id='italic'> {items.nationality} </p> <br />

                            <img id="flag" src={image} alt="image" />

                        </p>

                    )}



                </div >

            </div>
        );
    }
};

export default Widget2;