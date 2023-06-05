import reactLogo from "../assets/react.svg"
const Navbar = () =>{
    return (
        <nav className="navbar">
            <h1>
                <img src={reactLogo} alt={''}/>
                React Shopping List
                <img src={reactLogo} alt={''}/>
            </h1>
        </nav>
    )
}
export default Navbar