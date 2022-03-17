
import React from 'react';

const storeCreator = (props) => {
    return (
        <div>
            <h1>Store Maker</h1>
            <div>
                <p>Store name</p>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input id='storeName'></input>
                    <button onClick={() => props.addStore(document.getElementById('storeName').value)}>Add store</button>
                </form>
            </div>
        </div>
    );
};

export default storeCreator;