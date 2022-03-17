import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './visitorHomePage.css'
import VisitorNavbar from './../../components/navbar/navbar'

import IntroBox from '../../components/introBox/introBox'
import Passes from '../../components/passes/passes'
import Locations from '../../components/locations/locations'



const home = () => {
    return (
        
        <div id='home'>
        <VisitorNavbar/>
        <IntroBox/>
        {/* <a href='/login'> <button>TEst</button></a> */}
        <Passes/>
        <Locations/>
        </div>
    );


   
};


export default home;