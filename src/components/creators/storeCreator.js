
import React, { useState } from 'react'
import './storeCreator.css'


const storeCreator = (props) => {

    let [notifyText, setNotifyText] = useState(null)
    
    
    const handleAdd = () => {
        const storeInfo = {
            name : document.getElementById('storeInput').value,
            desc : document.getElementById('storeDesc').value,
            address : document.getElementById('address').value,
            city : document.getElementById('city').value,
            zip : document.getElementById('zip').value
        }
    
        props.addStore(storeInfo)
        setNotifyText('added')
    }

    const handleDelete = () => {
        props.deleteStore(document.getElementById('delAddress').value)
        setNotifyText('deleted')
    }
    
    return (
        <div id = 'container'>
            {notifyText ? 
                (
                <div>
                    Store has been {notifyText}!
                </div>
                )
            
             : null
            }
            <h1>Store Maker</h1>
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

export default storeCreator;