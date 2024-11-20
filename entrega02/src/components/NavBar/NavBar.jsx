import Logo from "./Logo"
import CartWidget from "./CartWidget"
import "./navbar.css"

function Navbar() {
  return (
    <div className="navbar">
        <Logo/>
            {/* <ul className="navbar-links">
                <li className="navbar-item">
                    <a href="">Pastas</a> 
                </li>
                <li className="navbar-item">
                    <a href="">Carnes</a> 
                </li>
                <li className="navbar-item">
                    <a href="">Pescados</a> 
                </li>
                <li className="navbar-item">
                    <a href="">Otros</a> 
                </li>
            </ul> */}
    <CartWidget/>
    </div>
  )
}

export default Navbar