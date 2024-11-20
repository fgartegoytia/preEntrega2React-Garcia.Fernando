import {Link,Outlet} from"react-router-dom"
import './listado.css'

function Layout() {
  return (

    <>
      <nav className="navbar">
        <ul>
            <li>
              <Link to= {"/"}>Menu</Link>
            </li>
            
            <li>
              <Link to= {"/pages/pastas"}>Pastas</Link>
            </li>
            <li>
              <Link to= {"/pages/carnes"}>Carnes</Link>
            </li>
        </ul>
      </nav>
      <Outlet/>
    
    
    </>
  )
}

export default Layout