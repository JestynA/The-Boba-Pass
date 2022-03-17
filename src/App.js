import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';


import VisitorHome from './pages/visitorHomePage/visitorHomePage'
import CustomerHome from './pages/customerHomepage/customerHomepage'
import AccountPage from './pages/accountPage/accountPage';
import CartPage from './pages/cartPage/cartPage';
import HousekeepingPage from './pages/HousekeepingPage/housekeepingPage'
import NotiPage from './pages/notiPage/notiPage';
import SettingsPage from './pages/settingsPage/settingsPage';
import StorePage from  './pages/storePage/storePage';

import store from './store'

const App = () => (

    <Router >


        <Routes>

            {/* Change to home element */}
        <Route path='/' element={<VisitorHome/>}/>
        <Route path='/gateway' element={<AccountPage/>}/> 
        <Route path='/home' element={<CustomerHome/>} store={store}/>
        <Route path='/housekeeping' element={<HousekeepingPage/>} store={store}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/notifications' element={<NotiPage/>}/>
        <Route path='/settings' element={<SettingsPage/>}/>
        <Route path='/vendor/:storeName/:id' element={<StorePage/>}/>


        

        </Routes>
  
    </Router>

);


export default App;