import {useState} from "react";

// destructuring addItem
const Form = ({addItem}) => {
    const [newItemName, setNewItemName] = useState('')

    const handleSubmit = (e) =>{
        //handles data ourselves
        e.preventDefault()
        // checks to see it a new value was entered
        if(!newItemName) return;
        // Calls on the addItem function passed down from App.jsx
        addItem(newItemName)
        // resets the input
        setNewItemName('')


    }
    return <form onSubmit={handleSubmit}>
        <h4> Grocery Bud</h4>
        <div className="form-control">
            <input
                type="text"
                className="form-input"
                value={newItemName}
                // After every change, sets new name by targeting the value equal to newItemName
                onChange={(event)=> setNewItemName(event.target.value)}
            />
            <button type="submit">Add Item</button>
        </div>
    </form>

}
export default Form