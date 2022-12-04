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



    const { data } = await axios.get("http://ergast.com/api/f1/drivers/russell/driverStandings.json")
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

export const affichagewins = async () => {



    const { data } = await axios.get("http://ergast.com/api/f1/drivers/russell/driverStandings.json")
    const modif = data.MRData.StandingsTable.StandingsLists.map(test =>

        test.DriverStandings.map(driver =>

        ({
            value: driver.wins,
            year: test.season,
        }))
    )
        ;

    return modif;

}

export const affichage = async () => {



    const { data } = await axios.get("http://ergast.com/api/f1/2022/results.json")
    const modif = data.MRData.StandingsTable.StandingsLists.map(test =>

        test.DriverStandings.map(driver =>

        ({
            value: driver.wins,
            year: test.season,
        }))
    )
        ;

    return modif;

}
