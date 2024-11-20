

function producto({imagen, nombre, descripcion, precio}) {
  return (

    <div className="card">
        <h2>{nombre}</h2>
        <h2>{descripcion}</h2>
        <h3>{precio}</h3>
        {/* //<img src="{imagen}" alt="" /> */} ver imagen
    
    </div>
  )
}

export default producto