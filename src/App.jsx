import {useEffect, useState} from "react";

import "./App.css"

import Nav from "./Nav.jsx";
import Form from "./Form.jsx";
import Items from "./Items.jsx";

const getLocalStorage=()=>{
    // gets items using "list" key saved in local storage
    let list = localStorage.getItem('list')
    //checks if list exists (prevents an error where it tries to parse null)
    if(list){
        // Parses string back to its original form (object)
        list = JSON.parse(localStorage.getItem('list'))
    } else {
        // gets rid of null values by making it an empty array
        list = []
    }
    // Returns the list of items grabbed from the local storage
    return list
}

const setLocalStorage=(items)=>{
    //converts object into string then saves to local storage
    localStorage.setItem('list', JSON.stringify(items))
}

const App = () =>{
    // theme
    const getStorageTheme = () => {
        let theme = 'light-theme';
        if(localStorage.getItem('theme')){
            theme = localStorage.getItem('theme')
        }
        return theme
    }
    const [theme,setTheme] = useState(getStorageTheme())
    const toggleTheme = () =>{
        if (theme === 'light-theme'){
            setTheme('dark-theme')
        } else{
            setTheme('light-theme')
        }
    }
    useEffect(()=>{
        // gives the application its theme
        document.documentElement.className = theme
        //saves the theme to local storage
        localStorage.setItem('theme', theme)
        // only runs when theme value is changed
    },[theme])

    // Setting Default useState to list of items held in the local storage
    const [items, setItems] = useState(getLocalStorage())
    const addItem = (itemName) =>{
//    constructing new Item object
        const newItem = {
            id: Date.now(), // items.length + 1,
            name: itemName,
        }
        // used spread to get all previous values and add newItem to array, prevents repeat code
        const newItems = [...items, newItem]
        // adds item to list
        setItems(newItems)
        //saves new item to local storage
        setLocalStorage(newItems)
    }

    // sets id parameter
    const removeItem=(id)=>{
        // creates new array, filters through all items labeling each object as an item...
        // then checks to see if the item id doesn't match the id parameter
        const filteredList = items.filter((item)=> item.id !== id)
        // sets items equal to the filtered array (with the item being removed).
        setItems(filteredList)
        // saves filtered list to local storage
        setLocalStorage(filteredList)
    }

    const clearItems=()=>{
        // resets items to an empty array
        setItems([])
        // empties items in local storage
        setLocalStorage([])
    }


    return <section className='page-wrapper'>
        {/* Just for looks */}
        <Nav toggleTheme={toggleTheme}/>
        {/* passing addItem and removeItem to Form.jsx*/}
        <Form addItem={addItem}/>
        {/* passing items(object) array and clearItems down to Items.jsx*/}
        <Items items={items} clearItems={clearItems} removeItem={removeItem} getStorageItems/>

    </section>
}

export default App