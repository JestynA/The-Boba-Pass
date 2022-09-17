import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/reducers/actions'

import './storeContainer.css'

const mapStateToProps = state => {
    return({
        totalStores: state.totalStores,
        storeList: state.storeList
    })
}

const mapDispatchToProps = dispatch => {
    return {
        addStore : (storeInfo) => dispatch(actions.addStoreCreator(storeInfo)),
        deleteStore : (address) => dispatch(actions.deleteStoreCreator(address)),
    }
}

const storeContainer = (props) => {

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
        .then(res => console.log('added store to database'))
    
        props.addStore(storeInfo)
        setNotifyText('added')
    }

    const handleDelete = () => {
        props.deleteStore(document.getElementById('delAddress').value)
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

export default connect(mapStateToProps,mapDispatchToProps)(storeContainer);