import React from 'react';
import { Component } from 'react';

import './passes.css'

import enthusiastGif from './assets/enthusiastBoba.gif'
import fiendGif from './assets/fiendBoba.gif'
import fanGif from './assets/fanBoba.gif'

class passes extends Component{
    render(){
        return(
            <div id='tierContainer'>
                <div className='tierRows'>
                {/* <img src={enthusiastGif} alt='Unable to load gif'></img> */}
                 <button id='bobaButton'> 20 drinks / mo</button>
                    <div className='description'>
                        <h1> The Boba Enthusiast </h1>
                        <h2> 
                        For the true boba enthusiast, that lives for boba.
                         
                        </h2>
                        <h5 > Starting at only $59.99/month</h5>
                        <a href='/gateway'><button id='planButton'>Choose plan</button></a>
                    </div>
                </div>

                <div className='tierRows'>
                    <div className='description'>
                        <h1>The Boba Fiend</h1>
                    <h2>
                    For the frequent boba getter, that goes multiple times a week.
                    

                   </h2>    
                   <h5>
                            Starting at only $39.99/month
                        </h5>
                        <a href='/gateway'><button id='planButton'>Choose plan</button></a>
                    </div>
                    {/* <img src={fiendGif} alt='Unable to load gif'></img> */}
                    <button id='bobaButton'> 10 drinks / mo</button>

                </div>

                <div className='tierRows'>
                    <button id='bobaButton'> 4 drinks / mo</button>
                        {/* <img src={fanGif} alt='Unable to load gif'></img> */}
                    <div className='description'>
                        <h1>The Boba Fan</h1>
                        <h2>
                    For the occasional boba getter, that prefers once a week.
                       

                   </h2> <h5>
                            Starting at only $19.99/month
                        </h5>
                        <a href='/gateway'><button id='planButton'>Choose plan</button></a>
                    </div>                  
                </div>
            </div>
        )
    }
}

export default passes;