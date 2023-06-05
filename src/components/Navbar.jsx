import reactLogo from "../assets/react.svg"

const Navbar = () =>{
    return (
        <nav className="navbar">
            <img src={reactLogo} alt={''}/>
            <div>React Shopping List</div>
            <img src={reactLogo} alt={''}/>
        </nav>
    )
}
export default Navbar