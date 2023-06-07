import './App.css'
import {useState} from "react";
import Navbar from "./components/Navbar.jsx";
import Form from "./components/Form.jsx";

import Input from "./components/Input.jsx";
// import List from "./components/List.jsx";
// import Footer from "./components/Footer.jsx";
function App() {
    const [item, setItem] = useState([])


  return (
      <>
          <Navbar/>
          {/*<Input/>*/}
          <Form/>
          {/*<List/>*/}
          {/*<Footer/>*/}
      </>
  )
}

export default App
