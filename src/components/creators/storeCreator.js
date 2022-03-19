
import React from 'react';

import './storeCreator.css'

const storeCreator = (props) => {
    return (
        <div>
            <h1>Store Maker</h1>
            <div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input id='storeInput' placeholder='Name'></input>
                    <input id='storeDesc' placeholder='Description'></input>
                    <input id='address' placeholder='Address'></input>
                    <input id='city' placeholder='City'></input>
                    <input id='zip' placeholder='Zip'></input>
                    <button onClick={() => {
                        const storeInfo = {
                            name : document.getElementById('storeInput').value,
                            desc : document.getElementById('storeDesc').value,
                            address : document.getElementById('address').value,
                            city : document.getElementById('city').value,
                            zip : document.getElementById('zip').value
                        }

                        let full = true;
                        let arr = Object.values(storeInfo)
                        for(const el of arr){
                            if(el==='') full=false;
                        }

                        // check for all inputs before submitting info 
                        if(full){
                            props.addStore(storeInfo)
                        } else {
                            console.log('Missing inputs')
                        }
                        // console.log(storeInfo);
                    }}>Add store</button>
                </form>
            </div>
            <div>
                Delete store
                <form onSubmit={(e) => e.preventDefault()}>
                    <input id='delAddress' placeholder='Address'></input>
                    <button onClick={() => {props.deleteStore(document.getElementById('delAddress').value)}}>Delete Store</button>
                </form>
            </div>
        </div>
    );
};

export default storeCreator;