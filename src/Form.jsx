import {useState} from "react";

// destructuring addItem
const Form = ({addItem}) => {
    const [newItemName, setNewItemName] = useState('')
    // used to update value onChange

    const handleSubmit = (e) =>{
        //handles data ourselves
        e.preventDefault()
        // checks to see it a new value was entered
        if(!newItemName) return;
        // Calls on the addItem function passed down from App.jsx
        addItem(newItemName)
        console.log(newItemName)

        // resets the input
        setNewItemName('')

    }
    return <form onSubmit={handleSubmit}>
        <div className="form-control">
            <input
                type="text"
                value={newItemName}
                placeholder="Bananas"
                // After every change, sets new name by targeting the value equal to newItemName
                onChange={(event)=> setNewItemName(event.target.value)}
            />
            <button type="submit" className="btn">Add Item</button>
        </div>
    </form>

}
export default Form