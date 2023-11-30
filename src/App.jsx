
import {HashRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Contenido from './components/Contenido'
import Articulo from './components/Articulo'

function App() {
  

  return (
    <HashRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contenido' element={<Contenido/>} />
        <Route path='/articulos' element={<Articulo/>} />
        {/* <Route path='*' element={<NotFound/>} /> */}
      </Routes>
    </HashRouter>
  )
}

export default App
