import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from './../navbar/guccigoob.jpg'

import cartIcon from './../../../assets/pics/shoppingBag.png'
import notiIcon from './../../../assets/pics/notification.png'
import settingIcon from './../../../assets/pics/menu.png'


import './customerNavBar.css'



const navbar = () => {

    const cartSize = useSelector(state => state.cartReducer.cart.length)
  

    
    return(
       <div>
           <ul id='navBar'>
           <Link to='/home'>
               <li ><img src={logo} type='jpg' id='logo'></img></li>
           </Link>
                
                <div id='accountActions'>
                <Link to='/'>
                    <li>
                        <button className='button'>-</button>
                    </li>
                </Link>
                <Link to='/housekeeping'>
                    <li>
                        <button className='button' id='housekeepingButton'>+</button>
                    </li>
                </Link>
                <Link to='/cart'>
                    <li>
                    <button className='button' id='cartButton'>
                        <img className='buttonImg' src={cartIcon}/>
                    </button>
                    {cartSize ? <div id = 'cartSize'>{cartSize}</div>: null}
                    </li>
                </Link>
                
                <Link to='/notifications'>
                    <li>
                        <button className='button' id='notificationButton'><img className='buttonImg' src={notiIcon}/></button>
                    </li> 
                </Link>

                <Link to='/gateway'> 
                    <li>
                        <button className='button' id='settingsButton'><img className='buttonImg' src={settingIcon}/></button>
                    </li>  
                </Link>
                  
                
                </div>

           </ul>
            
       </div>
    )
}


export default navbar;