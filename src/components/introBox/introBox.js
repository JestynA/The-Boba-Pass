import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import { Component } from 'react';

import './introBox.css'

import video from './boba.mp4'



class introBox extends Component{
    render(){
        return(
            <div id='introBox'>

                <div id='videoBox'>
                    <video loop autoPlay id='video' muted> 
                     <source src={video} type='video/mp4'></source>
                    </video>
    
                </div>

                <div id='welcomeText'>
                <h1>The Boba Pass</h1> 
                <h3 id='desc'> The one pass that really matters for serious boba drinkers. Quench your boba thirst as frequent as you wish with The Boba Pass!</h3>
                </div>
            </div>
        )
    }
}

export default introBox;