import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';


import VisitorHome from './pages/visitorHomePage/visitorHomePage'
import CustomerHome from './pages/customerHomepage/customerHomepage'
import AccountPage from './pages/accountPage/accountPage';
import CartPage from './pages/cartPage/cartPage';
import HousekeepingPage from './pages/HousekeepingPage/housekeepingPage'
import NotiPage from './pages/notiPage/notiPage';
import SettingsPage from './pages/settingsPage/settingsPage';
import StorePage from  './pages/storePage/storePage';

import store from './store'

const App = () => {

    const[state, setState] = useState({
        cart: [],
    })

    console.log(state.cart)

    return(
        <Provider store = {store}>
            <Router >
                <Routes>
                    <Route path='/' element={<VisitorHome/>}/>
                    <Route path='/gateway' element={<AccountPage/>}/> 
                    <Route path='/home' element={<CustomerHome/>} />
                    <Route path='/housekeeping' element={<HousekeepingPage/>} />
                    <Route path='/cart' element={<CartPage cart={state.cart}/>}/>
                    <Route path='/notifications' element={<NotiPage/>}/>
                    <Route path='/settings' element={<SettingsPage/>}/>
                    <Route path='/vendor/:storeName/:id' element={<StorePage updateCart={setState} cart={state.cart}/>}/>
                </Routes>
            </Router>
        </Provider>
    )

    };


export default App;