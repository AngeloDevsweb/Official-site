
import {HashRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import './Details.css'
import './Articulo.css'
import './Spinner.css'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Contenido from './components/Contenido'
import Articulo from './components/Articulo'
import Details from './components/content/Details'
import ArticleDetail from './components/article/ArticleDetail'

function App() {
  

  return (
    <HashRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contenido' element={<Contenido/>} />
        <Route path='/articulos' element={<Articulo/>} />
        <Route path='/contenido/:id' element={<Details/>} />
        <Route path='/articulos/:id' element={<ArticleDetail/>} />
        {/* <Route path='*' element={<NotFound/>} /> */}
      </Routes>
    </HashRouter>
  )
}

export default App
