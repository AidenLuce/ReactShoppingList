import './App.css'
import {useState} from "react";
import Navbar from "./components/Navbar.jsx";
import Form from "./components/Form.jsx";

import Input from "./components/Input.jsx";
// import List from "./components/List.jsx";
// import Footer from "./components/Footer.jsx";
function App() {
    const [items, setItems] = useState([])

    const addItem = (itemName) => {
        const newItem = {
            id: items.length +1,
            // Date.now() is also an option
            name: itemName,
        }
        setItems([...items, newItem])
    }

  return (
      <>
          <Navbar/>
          {/*<Input/>*/}
          <Form addItem={addItem}/>
          {/*<List/>*/}
          {/*<Footer/>*/}
      </>
  )
}

export default App
