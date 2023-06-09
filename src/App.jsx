import {useState} from "react";

import "./App.css"

import Nav from "./Nav.jsx";
import Form from "./Form.jsx";
import Items from "./Items.jsx";

const App = () =>{
    // Setting Default useState to an empty array
    const [items, setItems] = useState([])

    const addItem = (itemName) =>{
//    constructing new Item object
        const newItem = {
            id: items.length+1, //Date.now()
            name: itemName,
        }
        // used spread to get all previous values and add newItem to array
        setItems([...items, newItem])
    }



    return <section className='page-wrapper'>
        {/* Just for looks */}
        <Nav/>
        {/* passing addItem down to Form.jsx*/}
        <Form addItem={addItem}/>
        {/* passing items array down to Items.jsx*/}
        <Items items={items}/>
    </section>
}

export default App
