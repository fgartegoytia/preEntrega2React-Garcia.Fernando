
import './App.css'
import NavBar from './components/NavBar/NavBar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './components/Pages/Home'
import Layout from './components/Layout'
import Pastas from './components/Pages/Pastas'
import Carnes from './components/Pages/Carnes'
import NoPage from './components/Pages/NoPage'
import Productos from './components/Productos'
import DetalleProducto from './components/DetalleProducto'





function App() {

  return (
    //<>
    
    <BrowserRouter>
       <NavBar />
      <Routes>
        
        <Route path='/' element={<Layout/>}>
              <Route index element={<Productos/>}/>
              <Route path='/pages/pastas' element={<Pastas/>}/>
              <Route path='/pages/carnes' element={<Carnes/>}/>
              <Route path='/productos/:id' element={<DetalleProducto/>}/>


              <Route path='*' element={<NoPage/>}/>
        </Route>
      </Routes>
     
     </BrowserRouter>
   // </>
  )
}

export default App