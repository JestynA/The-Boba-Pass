import React, { useState } from 'react';
import './storeContainer.css'

const storeContainer = () => {

    let [notifyText, setNotifyText] = useState(null)

    const notifyUser = (result) => {
        setNotifyText(result)
        setTimeout(() => setNotifyText(null), 3000)
    }

    const handleAdd = () => {
        const storeInfo = {
            name : document.getElementById('storeInput').value,
            desc : document.getElementById('storeDesc').value,
            address : document.getElementById('address').value,
            city : document.getElementById('city').value,
            zip : document.getElementById('zip').value
        }

        fetch('/db/createStore',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body : JSON.stringify(storeInfo)
        })
        .then(notifyUser('added'))
 
    }

    const handleDelete = () => {
        const store = {
            address : document.getElementById('delAddress').value
        }
        fetch('/db/deleteStore', {
            method: 'POST',
            headers: {
                'Content-type' : 'Application/json'
            },
            body: JSON.stringify(store)
        })
        .then(notifyUser('deleted'))
    }

    return (
        <div id='storeContainer'>
            {notifyText && <div> Store has been {notifyText}!</div>}
            <h1>Add store</h1>
            <div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input required id='storeInput' placeholder='Name'/>
                    <input required id='storeDesc' placeholder='Description'/>
                    <input required id='address' placeholder='Address'/>
                    <input required id='city' placeholder='City'/>
                    <input required id='zip' placeholder='Zip'/>
                    <button onClick={handleAdd}>Add store</button>
                </form>
            </div>
            <div>
                Delete store
                <form onSubmit={(e) => e.preventDefault()}>
                    <input id='delAddress' placeholder='Address'></input>
                    <button onClick={handleDelete}>Delete Store</button>
                </form>
            </div>
        </div>
    ); 

   
};

export default storeContainer;