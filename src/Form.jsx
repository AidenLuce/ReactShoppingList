import {useState} from "react";

const Form = () => {
    const [newItemName, setNewItemName] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(newItemName)
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