import logo from "../src/assets/react.svg"

const Nav = () =>{

    return(
        <>
            <header className='nav'>
                <img src={logo} alt=''/>
                <h1>React Shopping list</h1>
                <img src={logo} alt=''/>
            </header>
            <div className="nav-buffer"></div>
        </>

    )
}
export default Nav