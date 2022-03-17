import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';


import VisitorHome from './pages/visitorHomePage/visitorHomePage'
import CustomerHome from './pages/customerHomepage/customerHomepage'
import AccountPage from './pages/accountPage/accountPage';
import CartPage from './pages/cartPage/cartPage';
import HousekeepingPage from './pages/HousekeepingPage/housekeepingPage'

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
        

        </Routes>
  
    </Router>

);


export default App;