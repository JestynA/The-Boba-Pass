import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions'

import './storeContainer.css'

const mapDispatchToProps = dispatch => {
    return {
        addStore : (storeInfo) => dispatch(actions.addStoreCreator(storeInfo)),
        deleteStore : (address) => dispatch(actions.deleteStoreCreator(address)),
    }
}

const storeContainer = ({addStore, deleteStore}) => {

    let [notifyText, setNotifyText] = useState(null)

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
        .then(res => {
            if(res.status === 200) console.log('Added store to database!')
        })
    
        addStore(storeInfo)
        setNotifyText('added')
    }

    const handleDelete = () => {
        deleteStore(document.getElementById('delAddress').value)
        setNotifyText('deleted')
    }

    return (
        <div id='storeContainer'>
            {notifyText ? 
                (
                <div>
                    Store has been {notifyText}!
                </div>
                )
            
                : null
            }
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

export default connect(null, mapDispatchToProps)(storeContainer);