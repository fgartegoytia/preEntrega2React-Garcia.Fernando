import { Link } from "react-router-dom"

function producto({imagen, nombre, precio,id}) {
  return (

    <Link to={`/productos/${id}`} className="card">
        <img src={imagen}/>
        <h2>{nombre}</h2>
        <h3>{precio}</h3>
        
    
    </Link>
  )
}

export default producto