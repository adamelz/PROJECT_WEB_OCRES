import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';



//const Widget1 = (props) => {
class Widget1 extends React.Component {



    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // const [data, setData] = useState([]);
    // // const test = '';


    // // var drivers ['Drivers'][1]['driverId'];

    // let drivers = [];





    // var axios = require('axios');

    // var config = {
    //     method: 'get',
    //     url: 'http://ergast.com/api/f1/2020/drivers.json',
    //     headers: {}
    // };


    // const listing = () => {
    //     axios(config)
    //         .then(function (response) {

    //             // if (response.data) {
    //             //     const { driverId, PermanentNumber, GivenName, FamilyName, DateOfBirth, Nationality } = response.data;

    //             //             data.push({
    //             //               pilote: driverId,
    //             //            numero: PermanentNumber,
    //             //            prenom: GivenName,
    //             //           nom: FamilyName,
    //             //            naissance: DateOfBirth,
    //             //            nation: Nationality
    //             //       });

    //             // }
    //             //console.log(JSON.stringify(response.data));
    //             console.log(response.data);
    //             setData(data);
    //             //console.log(data);



    //         })
    //         .catch(function (error) {

    //             console.log(error);
    //         });
    // }

    // useEffect(() => {

    //     listing();
    //     console.log(data);
    //     //console.log(drivers)
    // }, [])


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    // const getData = async () => {
    //     const { data } = await axios.get('http://ergast.com/api/f1/2020/drivers.json')

    //     setData(data.MRData.DriverTable.Drivers);
    //     console.log(data);


    // };
    // useEffect(() => {
    //     getData();
    // }, []);


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // useEffect(() => {
    //     axios
    //         .get("http://ergast.com/api/f1/2022/drivers.json")
    //         .then(res => res.json())
    //         .then(drivers => console.log(drivers.data.MRData.DriverTable));
    //     //.then(drivers => this.setData(drivers.items.MRData.DriverTable));

    // }, []);

    //  console.log(data);


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //  useEffect(() => {
    //      fetch("http://ergast.com/api/f1/2020/drivers.json")
    //          .then((response) => response.json())
    //          .then(result => {
    //              setData(result.data.MRData.DriverTable.Drivers)

    //         })
    //  }, [])


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // constructor() {
    //     super();
    //     this.state = {
    //         items: []
    //     };
    // }

    // componentDidMount() {
    //     fetch("http://ergast.com/api/f1/2020/drivers.json")
    //         .then(res => res.json())
    //         //.then(elementts => console.log(elementts.MRData.DriverTable.Drivers))
    //         .then(drivers => this.setState({ items: drivers.MRData.DriverTable.Drivers }))
    //         .then(drivers => this.map.set({ items: drivers.MRData.DriverTable.Drivers }))
    // }

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

        // .then(drivers => this.map.set({ items: drivers.MRData.DriverTable.Drivers })) 
    }





    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    render() {

        //     console.log(items);

        //     const { error, isLoaded, items } = this.state;


        return (
            <div id='formw1bis' >
                <h1 className="liste"> Last Position </h1>

                <div className='orgaw1'>
                    {/* slice(7, 8).*/}

                    {/* {this.state.items.map(items =>
                        <p className="liste" key={items.id} >

                            Pilote {items.Results} :


                        </p>)} */}

                    {this.state.items.map(items =>

                        items.Results.slice(17, 18).map(driver =>

                            <p className="liste" key={driver.id} >


                                <br></br>
                                Race: {items.raceName} <br></br>
                                Position de {driver.Driver.givenName}  {driver.Driver.familyName} : <h1> {driver.position} e</h1>

                                {/* {items.nationality} */}

                            </p>

                        )

                    )}



                </div >


            </div >
        )
    }

};

export default Widget1;














