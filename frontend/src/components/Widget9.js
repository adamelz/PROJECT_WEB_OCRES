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
            <div className="usersDisplay">
                {listOfUsers.slice(0, 1).map((user) => {
                    return (
                        <div>
                            <h1>Name: {user.driver}</h1>
                            <h1>Before: {user.weightbefore}</h1>
                            <h1>After: {user.weightafter}</h1>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Widget9;