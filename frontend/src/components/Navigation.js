import React from 'react';
import { NavLink } from "react-router-dom"
import image from './logomercedes.png';
console.log(image);


const Navigation = () => {
    return (
        <div className='navigation'>
            <div>
                <NavLink to="/home" >

                    <li> Home </li>

                </NavLink>

                <NavLink to="/dashboard" >

                    <li> Dashboard </li>

                </NavLink>

                <NavLink to="/admin" >

                    <li> Administration </li>

                </NavLink>

                <img src={image} alt="Logo" />

            </div>

            <div>
                <hr />
            </div>



        </div>
    );
};

export default Navigation;