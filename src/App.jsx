
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './components/Pages/Home'
import Layout from './components/Layout'
import Pastas from './components/Pages/Pastas'
import Carnes from './components/Pages/Carnes'
import NoPage from './components/Pages/NoPage'
import Productos from './components/Productos'




function App() {

  return (
    //<>
    
    <BrowserRouter>



      <Routes>
        
        <Route path='/' element={<Layout/>}>
              <Route index element={<Productos/>}/>
              <Route path='/pages/pastas' element={<Pastas/>}/>
              <Route path='/pages/carnes' element={<Carnes/>}/>
              <Route path='*' element={<NoPage/>}/>


        </Route>
      </Routes>
     
     </BrowserRouter>
   // </>
  )
}

export default App