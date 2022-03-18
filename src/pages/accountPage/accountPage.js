import React from 'react';
import Navbar from '../../components/navbar/customerNavBar';
import './accountPage.css'




const accountPage = () => {

    function createUser(){
        const userInfo = {
            email : document.getElementById('email').value,
            password: document.getElementById('password').value,
            firstName : document.getElementById('firstName').value,
            lastName : document.getElementById('lastName').value
        }

        fetch('/db/create',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body    : JSON.stringify(userInfo),
        })
        .then(res => {
            console.log(res)
        })
      
       
    }


    function login(){
        const userInput = {
            email : document.getElementById('email').value,
            password: document.getElementById('password').value
        }


        fetch('/db/login', {
           method: 'POST',
           headers: {
            'Content-Type': 'application/json'
          },
           body: JSON.stringify(userInput)       
        })
        // .then( res => {
        //     if(res.status === 200){
        //         return true;
        //     }
        // })

    }


    return (
        <div id='page'>
            <Navbar/>
            <div id='main'>
                  <form method='POST' action='/signup'>
                <div id='names'>
          
                    <div>
                    First Name
                         
                        
                        <input id='firstName' placeholder='...'></input>
                        
                    </div>
                    <div>
                    Last Name
                           
                        
                        <input id='lastName' placeholder='...'></input>
                       
                    </div>
         
                </div>
                <div >
                Email
               
                    <input id='email' placeholder='johndoe@gmail.com'></input>
                
                </div>
                <div >
                Password
                  
                        <input type='password' id='password' placeholder='MUST include a symbol, a number, a capital letter, and a SSN'></input>
           
                </div>

                </form>
            </div>
            
                <div id='buttonContainer'>
                    <button id='signUp' onClick={createUser}>Sign Up</button>
                    <button id='logIn' onClick={login}>Log in</button>                    
                </div>
            <div id='footer'> </div>
        </div>
    );
};

export default accountPage;

//onClick={createUser(document.getElementById('firstName').innerText,document.getElementById('lastName').innerHTML,document.getElementById('emailInput').innerHTML,document.getElementById('passwordInput').innerHTML)}