import { useState, useEffect } from "react"
import axios from 'axios'
import {Link} from 'react-router-dom'


const Articulo = () => {

  const [article, setArticle] = useState([]);

  const getApi = async()=>{
    const {data} = await axios.get('https://jvaldez.duckdns.org:8443/api/articulos')
    setArticle(data.data)
  }

  useEffect(()=>{
    getApi()
  },[])


  return (
    <div className="container">
      <div className="separador"></div>

      <h2 className="text-white text-center mb-5">ARTICULOS</h2>
      {/* renderizado de articulos */}
      {
        article.map(({id, attributes})=>(
          <div className="contenedor-articulo" key={id}>
              <Link to={`/articulos/${id}`} className="titulo-link" ><h3 className="text-white">{attributes.title}</h3></Link>
              <p className="text-white fst-italic">{attributes.fecha}</p>
              <blockquote className="text-white">{attributes.miniDesc}</blockquote>
              <div className="separador-articulos"></div>
          </div>
        ))
      }

      <footer className="es-footer">
        &copy;2023 AngeloDevsweb.github.io - All rights reserved.
      </footer>

    </div>
  )
}

export default Articulo
