import React from 'react';
import { Component } from 'react';

import logo from './guccigoob.jpg'

import './navBar.css'

class navbar extends Component {
render(){
    return(
       <div>
           <ul id='navBar'>
                <li ><img src={logo} type='jpg' id='logo'></img></li>
                <div id='accountActions'>
                <a href='/gateway'><li><button id='loginButton'>Log in</button></li></a>
                <a href='/gateway'><li><button id='signupButton'>Sign up</button></li></a>  
                </div>

           </ul>
            
       </div>
    )
}
}

export default navbar;