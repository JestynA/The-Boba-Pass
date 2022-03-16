import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';


import VisitorHome from './pages/visitorHomePage/visitorHomePage'
import CustomerHome from './pages/customerHomepage/customerHomepage'
import AccountPage from './pages/accountPage/accountPage';

const App = () => (

    <Router >


        <Routes>

            {/* Change to home element */}
        <Route path='/' element={<VisitorHome/>}/>
        <Route path='/gateway' element={<AccountPage/>}/> 
        <Route path='/home' element={<CustomerHome/>}/>
        

        </Routes>
  
    </Router>

);


export default App;