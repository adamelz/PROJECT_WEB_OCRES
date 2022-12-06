import React, { Profiler } from 'react';
import image from './logomercedes.png';
import Widget1 from './Widget1';
import Widget2 from './Widget2';
import Widget3 from './Widget3';
import Widget4 from './Widget4';
import Widget5 from './Widget5';
import Widget6 from './Widget6';
import Widget7 from './Widget7';
import Widget8 from './Widget8';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import jsxToString from 'jsx-to-string';
import afficher from './Slider';
import Widget9 from './Widget9';


console.log(image);



const Dashboards = () => {

    let a = '';
    return (
        <div id='orga'>

            <div id='part1'>
                <div id='quatuor'>

                    <div id='ligne'>
                        <div >
                            <Widget1>
                            </Widget1>
                        </div>
                        <div>
                            <Widget5>
                            </Widget5>
                        </div>
                    </div>

                    <div id='ligne'>
                        <div>
                            <Widget6>
                            </Widget6>
                        </div>

                        <div>
                            <Widget8>
                            </Widget8>
                        </div>
                    </div>
                </div>
                <div>

                    <Widget4>
                    </Widget4>
                </div>

            </div>

            <div id='part1'>

                <div >
                    <Widget2>
                    </Widget2>
                </div>
                <div >
                    <Widget9>
                    </Widget9>
                </div>
                <div >
                    <Widget3>
                    </Widget3>
                </div>
                <div> <Widget7></Widget7> </div>

            </div>




            {/* <div id='disposition'>
                <div id='formw12'>

                    <div>
                         <Widget1>
                        </Widget1>

                        <Widget6>
                        </Widget6> 
                    </div>
                    <div>

                         <Widget5>
                        </Widget5>

                        <Widget8>
                        </Widget8> 




                    </div>


                </div>


                 <Widget4>
                </Widget4> 



            </div>

            <div id='disposition'>


                 <Widget2>
                </Widget2>



                <Widget3>
                </Widget3>

                <Widget7>
                </Widget7>

                <Widget9>

                </Widget9> 

            </div>


 */}

        </div>
    );
};

export default Dashboards;