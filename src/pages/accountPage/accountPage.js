import React from 'react';
import Navbar from '../../components/navbar/customerNavBar';
import './accountPage.css'




const accountPage = () => {

    function createUser(){
        console.log('createUser function');

        fetch('/api/gateway',{
            method: 'POST',
            body: JSON.stringify({test: 'bossbabyrocks119'}),
        })
        .then(res => {
            console.log(res)
        })
      
       
    }


    function login(){
        console.log('Logging in');
    }


    return (
        <div id='page'>
            <Navbar/>
            <div id='main'>
                  <form method='POST' action='/signup'>
                <div id='names'>
          
                    <div>
                    First Name
                         
                        
                        <input name='firstName'></input>
                        
                    </div>
                    <div>
                    Last Name
                           
                        
                        <input name='lastName' ></input>
                       
                    </div>
         
                </div>
                <div id='email'>
                Email
               
                    <input name='email'></input>
                
                </div>
                <div id='password'>
                Password
                  
                        <input type='password' name='password'></input>
           
                </div>

                </form>
            </div>
            
                <div id='buttonContainer'>
                    <button id='signUp' onClick={createUser}>Sign Up</button>
                    <button id='logIn'>Log in</button>                    
                </div>
            <div id='footer'> </div>
        </div>
    );
};

export default accountPage;

//onClick={createUser(document.getElementById('firstName').innerText,document.getElementById('lastName').innerHTML,document.getElementById('emailInput').innerHTML,document.getElementById('passwordInput').innerHTML)}