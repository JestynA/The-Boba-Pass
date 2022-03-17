
import React from 'react';

const storeCreator = (props) => {
    return (
        <div>
            <h1>Store Maker</h1>
            <div>
                <p>Store name</p>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input id='storeName' placeholder='Name'></input>
                    <input id='storeDesc' placeholder='Description'></input>
                    <input id='address' placeholder='Address'></input>
                    <input id='city' placeholder='City'></input>
                    <input id='zip' placeholder='Zip'></input>
                    <button onClick={() => {
                    const storeInfo = {
                        name : document.getElementById('storeName').value,
                        desc : document.getElementById('storeDesc').value,
                        address : document.getElementById('address').value,
                        city : document.getElementById('city').value,
                        zip : document.getElementById('zip').value
                    }
                    console.log(storeInfo);
                    props.addStore(storeInfo)}}>Add store</button>
                </form>
            </div>
        </div>
    );
};

export default storeCreator;