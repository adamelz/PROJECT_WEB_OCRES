import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image from './../assets/img/georgesans.png';
import ima from './../assets/img/fondG.png';
import imag from './../assets/img/lewissans.png';
import im from './../assets/img/fondL.png';
import Dashboard from '../pages/Dashboard';
import jsxToString from 'jsx-to-string';


console.log(ima);
console.log(image);
console.log(imag);


function profil(a) {

    let result = ' ';

    if (a > 0) {
        result = 'Georgeee';
    }
    else {
        result = 'Lewiss';
    }

    //alert(result);
    console.log(result);

    return result;

}



const Slider = () => {

    //     let [Name, setname] = useState('');

    //     const handleChange = (event) => {
    //         setname(event.target.name);
    //         console.log(Name);
    //     }

    //     return (

    //         // <Carousel onChange={(name) => profil(name)} >
    //         <div>
    //             <Carousel onChange={handleChange}>

    //                 <div type="radio" id="taille" name={Name}>

    //                     <img src={ima} alt="" />
    //                     <img id="persoG" src={image} alt="" />

    //                 </div>
    //                 <div type="radio" id="taille" name={Name}>
    //                     <img src={im} alt="" />
    //                     <img id="persoL" src={imag} alt="" />

    //                 </div>

    //             </Carousel >

    //             <div>
    //                 <h1> Dashboard of {Name} </h1>

    //             </div>


    //         </div>


    //     );

    // }

    /*  Initial State */
    const [Name, setName] = useState('George Russell', '');
    const [count, setCount] = useState(0);
    const [num, setNume] = useState();

    /* The handleChange() function to set a new state for input */


    function handleChange() {
        //setname(event.value);
        setNume(num + 1);

        if (num % 2 == 0) {
            setName("George Russel");
        }
        else {

            setName("Lewis Hamilton");
        }


        return console.log(Name);
    }

    useEffect(() => {

        handleChange();
        // document.title = `You clicked ${count} times`;
        // alert(count);
    });


    return (
        <>

            <form>

                <div>

                    <Carousel onChange={e => handleChange()}>

                        <div type="radio" id="taille" >

                            <img src={ima} alt="" />
                            <img id="persoG" src={image} alt="" />


                        </div>
                        <div type="radio" id="taille" >
                            <img src={im} alt="" />
                            <img id="persoL" src={imag} alt="" />

                        </div>

                    </Carousel >
                    <h1>Dashboard of  &nbsp; <span > {Name}</span></h1>

                </div>
                {/* <div>
                    <p>You clicked {count} times</p>
                    <button onClick={() => setCount(count + 1)}>
                        Click me
                    </button>
                </div> */}
            </form>
        </>
    )
}


export default Slider;


