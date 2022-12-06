import React from 'react';
import Navigation from '../components/Navigation';
import { useState, useEffect } from "react";
import Axios from "axios";

const Admin = () => {

    const [listOfUsers, setListOfUsers] = useState([]);
    const [driver, setName] = useState("");
    const [weightbefore, setAge] = useState(0);
    const [weightafter, setUsername] = useState(0);


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

        <div>
            <Navigation />


            <h1> Page administration </h1>
            {/* <div id='disposition'>

                <div id='login'>
                    <div id='cercle'>
                    </div>
                    <h2> Administrateur </h2>

                    <div id='text'><input type="text" placeholder='Utilisateur' /></div>
                    <br />
                    <div id='text'><input type="password" placeholder='Mot de passe' /></div>
                    <br />
                    <button class="button button1" > Connect </button>


                </div> 

    </div>*/}

            <div id='disposition'>
                <input
                    type="text"
                    placeholder="Driver..."
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
                <input
                    type="number"
                    placeholder="Before..."
                    onChange={(event) => {
                        setAge(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="After..."
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }}
                />
                <button onClick={createUser}> Create User </button>
            </div>

        </div >
    );
};

export default Admin;