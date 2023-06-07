import {useState} from "react";

import Form from "./Form.jsx";

import "./App.css"

const App = () =>{
    // Setting Default useState to an empty array
    const [items, setItems] = useState([])
    return <section className="section-center">
        <Form/>
    </section>
}

export default App
