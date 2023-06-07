import {useState} from "react";

import Form from "./Form.jsx";

import "./App.css"

const App = () =>{
    // Setting Default useState to an empty array
    const [items, setItems] = useState([])

    const addItem = (itemName) =>{
//    constructing new Item object
        const newItem = {
            id: items.length+1, //Date.now()
            name: itemName,
            completed: false,
        }
        // used spread to get all previous values and add newItem to array
        setItems([...items, newItem])

    }



    return <section className="section-center">
        {/* passing addItem down to Form*/}
        <Form addItem={addItem}/>
    </section>
}

export default App
