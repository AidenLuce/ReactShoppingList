import logo from "../src/assets/react.svg"
import {useState} from "react";

const Nav = ({toggleTheme, getStorageTheme}) =>{

    return(
        <>
            <header className='nav'>
                <img src={logo} alt=''/>
                <h1>React Shopping list</h1>
                <img src={logo} alt=''/>
                <button className='theme-btn' onClick={toggleTheme}><h4>Change Theme</h4></button>
            </header>
            <div className="nav-buffer">
            </div>
        </>

    )
}
export default Nav