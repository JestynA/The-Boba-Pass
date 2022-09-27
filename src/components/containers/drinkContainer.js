import React , { useState} from 'react';
import './drinkContainer.css'


const drinkContainer = () => {

    const [action, setAction] = useState(null)

    const notifyUser = (result) => {
        setAction(result)
        setTimeout(() => setAction(null), 3000)
    }
    
    const handleDelete = () => {
        const drinkInfo = {
            name: document.getElementById('delName').value,
            vendor: document.getElementById('delId').value
        }

        for(const value of Object.values(drinkInfo)){
            if(value === '') return
        }
        
        fetch('/db/deleteDrink', {
            method: 'POST',
            headers: {
                'Content-Type' : 'Application/json'
            },
            body: JSON.stringify(drinkInfo)
        })
        .then(notifyUser('deleted'))
    }

    const handleAdd = () => {
        const drinkInfo = {
            name: document.getElementById('drinkName').value,
            desc: document.getElementById('drinkDesc').value,
            price: document.getElementById('priceInput').value,
            vendor_id: document.getElementById('vendorId').value
        }
       
        for(const value of Object.values(drinkInfo)){
            if(value === '') return
        }

        fetch('/db/addDrink', {
            method: 'POST',
            headers: {
                'Content-type' : 'Application/json'
            },
            body: JSON.stringify(drinkInfo)
        })
        .then(notifyUser('added'))
    }

    return (
        <div id='drinkContainer'>
            <h1>Drink Creator</h1>
            <div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input required id='drinkName' placeholder='Drink'></input>
                    <input required id='drinkDesc' placeholder='Description'></input>
                    <input required id='priceInput' placeholder='Price'></input>
                    <input required id='vendorId' placeholder='vendor #'></input>
                    <button onClick={handleAdd}  >Add Drink</button>
                </form>
            </div>
            <div>
                Delete Drink
                <form onSubmit={(e) => e.preventDefault()} id='deleteDrink'>
                    <input required id='delName' placeholder='Drink Name'></input>
                    <input required id='delId' placeholder='Vendor ID'></input>
                    <button onClick={handleDelete}>Delete Drink</button>
                </form>
                {action  && <div>Drink has been {action}!</div>}
            </div>
        </div>
    );  
}



export default drinkContainer;
