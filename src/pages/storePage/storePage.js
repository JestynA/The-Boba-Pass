import React from 'react';
import { useParams } from 'react-router-dom';
import CustomerNavBar from './../../components/navbar/customerNavBar'

import './storePage.css'

const storePage = () => {

    const params = useParams();
console.log(params)


    return (
        <div>
        <CustomerNavBar/>
            <div id='header'>
                {params.storeName}
            </div>
            <div id='body'>

            </div>
        </div>
    );
};

export default storePage;