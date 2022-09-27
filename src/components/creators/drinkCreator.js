import React from 'react';



const drinkCreator = (props) => {
    return (
        <div>
            <h1>Drink Creator</h1>
            <div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input required id='drinkName' placeholder='Drink'></input>
                    <input required id='drinkDesc' placeholder='Description'></input>
                    <input required id='priceInput' placeholder='Price'></input>
                    <input required id='vendorId' placeholder='vendor #'></input>
                    <button onClick={() => {
                        const drinkinfo = {
                            name: document.getElementById('drinkName').value,
                            desc: document.getElementById('drinkDesc').value,
                            price: document.getElementById('priceInput').value,
                            vendor_id: document.getElementById('vendorId').value
                        }

                        let full = true;
                        

                        let arr = Object.values(drinkinfo)
                        for(const el of arr){
                            if(el==='') full=false;
                        }

                        if(full) {
                            props.addDrink(drinkinfo)
                        }
                        else {
                            console.log('Missing inputs')
                        }



                    }}  >Add Drink</button>
                </form>
            </div>
            <div>
                Delete Drink
                <form onSubmit={(e) => e.preventDefault()}>
                    <input id='delName' placeholder='Drink Name'></input>
                    <input id='delId' placeholder='Vendor ID'></input>
                    <button onClick={() => {

                        const delDrinkInfo = {
                            name: document.getElementById('delName').value,
                            vendor: document.getElementById('delId').value
                        }
                        let full = true;

                        let arr = Object.values(delDrinkInfo)
                        for(const el of arr){
                            if(el==='') full=false;
                        }

                        if(full) {
                            props.deleteDrink(delDrinkInfo)
                        }
                        else {
                            console.log('Missing inputs')
                        }
                    
                    }}>Delete Drink</button>

                </form>
            </div>
        </div>
    );
};

export default drinkCreator;