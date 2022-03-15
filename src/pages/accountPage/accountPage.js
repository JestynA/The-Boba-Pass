import React from 'react';
import Navbar from '../../components/navbar/customerNavBar';
import './accountPage.css'

const accountPage = () => {
    return (
        <div id='page'>
            <Navbar/>
            <div id='main'>
                <div id='names'>
                    <div>
                    First Name
                         <form>
                        
                        <input id='firstName'></input>
                          </form>  
                    </div>
                    <div>
                    Last Name
                          <form>    
                        
                        <input id='lastName' ></input>
                    </form>      
                    </div>
         
                </div>
                <div id='email'>
                Email
                <form >
                    <input ></input>
                </form>
                </div>
                <div id='password'>
                Password
                    <form >
                        <input></input>
                    </form>
                </div>

    
            </div>
            
                <div id='buttonContainer'>
                    <button id='signUp'>Sign Up</button>
                    <button id='logIn'>Log in</button>                    
                </div>
            <div id='footer'>asd </div>
        </div>
    );
};

export default accountPage;