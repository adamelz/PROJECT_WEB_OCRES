import React from 'react';
import { NavLink } from "react-router-dom"
import image from './logomercedes.png';

console.log(image);

const Naviagationl = () => {
    return (
        <div className='navigationl'>

            <img src={image} id="logo" alt="Logo" />
            <hr />

            <div>
                <NavLink to="/home">

                    {/* <li> <img id="iconeH" src={image} /> </li> */}


                    <li>  Home </li>


                </NavLink>

            </div>
            <div>
                <NavLink to="/dashboard" >

                    {/* <li> <img id="icone" src={imag} /> </li> */}

                    <li>  Dashboard </li>

                </NavLink>

            </div>
            <div>

                <NavLink to="/admin" >

                    {/* <li> <img id="icone" src={ima} /> </li> */}

                    <li> Administration</li>

                </NavLink>
            </div>

        </div>


    );
};

export default Naviagationl;