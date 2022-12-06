import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image from './../assets/img/georgesans.png';
import ima from './../assets/img/fondG.png';
import imag from './../assets/img/lewissans.png';
import im from './../assets/img/fondL.png';
import Dashboard from '../pages/Dashboard';
import jsxToString from 'jsx-to-string';


class Slider extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

            value: '',
            name: 'George Russell'
        };
    }

    handleChange(props) {

        this.setState({ value: props });
        console.log(this.state.value)

        if (this.state.value % 2 == 0) {
            this.setState({ name: "Lewis Hamilton" });
        }
        else {

            this.setState({ name: "George Russell" });
        }
        const nom = this.state.name;

        return nom;

    };

    render() {

        return (
            <>

                <form>

                    <div>


                        <Carousel onChange={number => this.handleChange(number)}>

                            <div type="radio" id="taille" >

                                <img src={ima} alt="" />
                                <img id="persoG" src={image} alt="" />


                            </div>
                            <div type="radio" id="taille" >
                                <img src={im} alt="" />
                                <img id="persoL" src={imag} alt="" />

                            </div>

                        </Carousel >
                        <h1>Dashboard of  &nbsp; <span > {this.state.name}</span></h1>

                    </div>

                </form>
            </>
        )
    }
}


export default Slider;


