import React from 'react';
import Navigation from '../components/Navigation';

const Admin = () => {
    return (

        <div>
            <Navigation />


            <h1> Page administration </h1>
            <div id='disposition'>

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

            </div>
        </div>
    );
};

export default Admin;