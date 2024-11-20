import menu from "../productos"
import Producto from "./producto"
import "./listado.css"


function Productos() {
  return (

    <div className="container">
      
      {menu.map(prod=>(
        <Producto key={prod.id} {...prod}/>
      ))}
      
    </div>
  )
}

export default Productos