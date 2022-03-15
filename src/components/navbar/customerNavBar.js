import React from 'react';
import { Component } from 'react';

import logo from './../navbar/guccigoob.jpg'

import cartIcon from './../../../assets/pics/shoppingBag.png'
import notiIcon from './../../../assets/pics/notification.png'
import settingIcon from './../../../assets/pics/menu.png'


import './customerNavBar.css'

class navbar extends Component {
render(){
    return(
       <div>
           <ul id='navBar'>
                <li ><img src={logo} type='jpg' id='logo'></img></li>
                <div id='accountActions'>
                <li><button className='button' id='cartButton'><img className='buttonImg' src={cartIcon}/></button></li>
                <li><button className='button' id='notificationButton'><img className='buttonImg' src={notiIcon}/></button></li>   
                <li><button className='button' id='settingsButton'><img className='buttonImg' src={settingIcon}/></button></li>  
                </div>

           </ul>
            
       </div>
    )
}
}

export default navbar;