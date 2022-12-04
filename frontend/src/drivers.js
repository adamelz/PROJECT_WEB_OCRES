import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';



export const affichagedonut = async () => {


    const { data } = await axios.get("http://ergast.com/api/f1/2020/drivers.json")
    const modif = data.MRData.DriverTable.Drivers.map((test) => ({

        value: test.permanentNumber,
        name: test.familyName,


    }));
    return modif;


}


export const affichagestanding = async () => {



    const { data } = await axios.get("http://ergast.com/api/f1/drivers/hamilton/driverStandings.json")
    const modif = data.MRData.StandingsTable.StandingsLists.map(test =>

        test.DriverStandings.map(driver =>

        ({
            value: driver.positionText,
            year: test.season,
        }))
    )
        ;

    return modif;


}

{/* <div className="orgaw1">

{this.state.items.map(items =>

    items.DriverStandings.map(driver =>

        <li className="liste" key={items.id} >


            <br></br>
            Season: {items.season} <br></br>
            Position de {driver.Driver.givenName}  {driver.Driver.familyName} : <p> {driver.position} e</p>


        </li>

    )

)
}
</div > */}