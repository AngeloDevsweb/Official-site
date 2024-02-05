import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ReactMarkdown from "react-markdown";

const ArticleDetail = () => {

  const {id} = useParams()

  const [articulo, setArticulo] = useState({})

  useEffect(()=>{
    const getArticle = async()=> {
      try {
        const response = await axios.get(
          `https://jvaldez.duckdns.org:8443/api/articulos/${id}`
        );
        //console.log("Respuesta de la API:", response);
        if (response.status === 200) {
          const { data } = response;
          if (data && data.data && data.data.attributes) {
            setArticulo(data.data.attributes);
          } else {
            throw new Error(
              "La respuesta de la API no contiene los datos esperados."
            );
          }
        } else {
          throw new Error("La solicitud a la API no fue exitosa.");
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    }
    getArticle();
  },[id])

  return (
    <div className='container'>
      <div className="separador"></div>

      <div className='caja-detalle'>
        <ReactMarkdown className="text-white">
            {articulo.contenido}
          </ReactMarkdown>
      <div>
        <Link to="/articulos" className="volver-atras">
          Volver...
        </Link>
      </div>
      </div>



      {/* seccion del footer  */}

      <footer className="es-footer">
        &copy;2023 AngeloDevsweb.github.io - All rights reserved.
      </footer>
    </div>
  )
}

export default ArticleDetail
