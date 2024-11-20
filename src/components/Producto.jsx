

function producto({imagen, nombre, precio}) {
  return (

    <div className="card">
        <img src={imagen}/>
        <h2>{nombre}</h2>
        <h3>{precio}</h3>
        
    
    </div>
  )
}

export default producto