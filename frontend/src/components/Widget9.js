import { useState, useEffect } from "react";
import Axios from "axios";
import React from 'react';


function Widget9() {

    const [listOfUsers, setListOfUsers] = useState([]);


    useEffect(() => {
        Axios.get("http://localhost:3001/getUsers").then((response) => {
            setListOfUsers(response.data);
        });
    }, []);


    return (
        <div id="w3">
            <h2 className="liste"> Drivers's weight </h2>
            <div className="liste">

                <br />
                {listOfUsers.slice(0, 1).map((user) => {
                    return (
                        <div>

                            <p>Before the race : <h1 className="data">{user.weightbefore} kg</h1></p> <br></br>
                            <p>After the race : <h1 className="data">{user.weightafter} kg</h1></p>

                            {/* <p id="nameposition">{user.driver}</p> */}
                        </div>

                    );
                })}
            </div>
        </div>
    );
}

export default Widget9;