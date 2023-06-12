import {useState} from "react";

import "./App.css"

import Nav from "./Nav.jsx";
import Form from "./Form.jsx";
import Items from "./Items.jsx";

const App = () =>{
    // Setting Default useState to an empty array
    const [items, setItems] = useState([])
    console.log(items)

    const addItem = (itemName) =>{
//    constructing new Item object
        const newItem = {
            id: items.length+1, //Date.now()
            name: itemName,
        }
        // used spread to get all previous values and add newItem to array
        setItems([...items, newItem])
    }

    // sets id parameter
    const removeItem=(id)=>{
        // creates new array, filters through all items labeling each object as an item...
        // then checks to see if the item id doesn't match the id parameter
        const filteredList = items.filter((item)=> item.id !== id)
        // sets items equal to the filtered array (with the item being removed).
        setItems(filteredList)
    }

    const clearItems=()=>{
        // resets items to an empty array
        setItems([])
    }


    return <section className='page-wrapper'>
        {/* Just for looks */}
        <Nav/>
        {/* passing addItem and removeItem to Form.jsx*/}
        <Form addItem={addItem}/>
        {/* passing items(object) array and clearItems down to Items.jsx*/}
        <Items items={items} clearItems={clearItems} removeItem={removeItem}/>

    </section>
}

export default App