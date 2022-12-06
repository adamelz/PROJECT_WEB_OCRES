import { useState, useEffect } from "react";
import Axios from "axios";
import React from 'react';


function Widget9() {

    const [listOfUsers, setListOfUsers] = useState([]);
    const [driver, setName] = useState("");
    const [weightbefore, setAge] = useState(0);
    const [weightafter, setUsername] = useState(0);

    useEffect(() => {
        Axios.get("http://localhost:3001/getUsers").then((response) => {
            setListOfUsers(response.data);
        });
    }, []);

    const createUser = () => {
        Axios.post("http://localhost:3001/createUser", {
            driver,
            weightbefore,
            weightafter,
        }).then((response) => {
            setListOfUsers([
                ...listOfUsers,
                {
                    driver,
                    weightbefore,
                    weightafter,
                },
            ]);
        });
    };

    return (
        <div id="formw7">
            <h2 className="liste"> Drivers's weight in (kg) </h2>
            <div className="liste">

                <br />
                {listOfUsers.slice(0, 1).map((user) => {
                    return (
                        <div>

                            <p>Before the race : <h1 className="data">{user.weightbefore}</h1></p>
                            <p>After the race : <h1 className="data">{user.weightafter}</h1></p>

                            <p id="nameposition">{user.driver}</p>
                        </div>

                    );
                })}
            </div>
        </div>
    );
}

export default Widget9;