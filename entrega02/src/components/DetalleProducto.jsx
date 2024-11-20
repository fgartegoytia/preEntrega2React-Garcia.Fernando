import menu from "../productos"
import { useParams } from "react-router-dom"

function DetalleProducto() {
    
    const {id} = useParams();
    console.log(id)
    const  producto=menu.find(prod=>prod.id===parseInt(id))

    if(!producto){
        return <h2>El plato no lo encontramos!</h2>
    }
  return (
    <div>
        <h2>{producto.descripcion}</h2>
        <img src={producto.imagen}/>
        <h2>{producto.nombre}</h2>
        <h3>{producto.precio}</h3>
    </div>
  )
}

export default DetalleProducto