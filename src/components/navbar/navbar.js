import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import CustomerHomepage from '../../pages/customerHomepage/customerHomepage';

import logo from './guccigoob.jpg'

import './navBar.css'

class navbar extends Component {
render(){
    return(
       <div>
           <ul id='navBar'>
                <li ><img src={logo} type='jpg' id='logo'></img></li>
                <div id='accountActions'>                
                    <Link to='/home' ><li><button className='button' id='cartButton'> TEST </button></li></Link>
                    <Link to='/gateway'><li><button id='loginButton'>Log in</button></li></Link>
                    <Link to='/gateway'><li><button id='signupButton'>Sign up</button></li></Link>  
                </div>
           </ul>
       </div>
    )
}
}

export default navbar;