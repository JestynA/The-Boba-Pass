import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VisitorHome from './pages/visitorHomePage/visitorHomePage'
import CustomerHome from './pages/customerHomepage/customerHomepage'
import AccountPage from './pages/accountPage/accountPage';
import CartPage from './pages/cartPage/cartPage';
import HousekeepingPage from './pages/HousekeepingPage/housekeepingPage'
import NotiPage from './pages/notiPage/notiPage';
import SettingsPage from './pages/settingsPage/settingsPage';
import StorePage from  './pages/storePage/storePage';


const App = () => {

    return(
        <Router >
            <Routes>
                <Route path='/' element={<VisitorHome/>}/>
                <Route path='/gateway' element={<AccountPage/>}/> 
                <Route path='/home' element={<CustomerHome />}/>
                <Route path='/housekeeping' element={<HousekeepingPage/>} />
                <Route path='/cart' element={<CartPage/>}/>
                <Route path='/notifications' element={<NotiPage/>}/>
                <Route path='/settings' element={<SettingsPage/>}/>
                <Route path='/vendor/:storeName/:id' element={<StorePage/>}/>
            </Routes>
        </Router>
    )
};

export default App;
