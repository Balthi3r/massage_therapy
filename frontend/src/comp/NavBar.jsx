import "./navbar.css"

const Navbar=() =>{
return(
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">Wish</span>
            <div className="navItems">
            <button className="navButton" href="/">Massages</button>
                <button className="navButton" href="/about">About</button>
                <button className="navButton">Login</button>
                <button className="navButton">Register</button>


            </div>
        </div>
    </div>
)}
export default Navbar