import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Spinner from './Spinner'

const Contenido = () => {

  const [lista, setLista] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getApi = async()=>{
    try {
      const {data} = await axios.get('https://jvaldez.duckdns.org:8443/api/contenidos?populate=*')
      setLista(data.data)
      setIsLoading(false)
    } catch (error) {
      //console.log(error);
      setIsLoading(false);
      alert("En este momento estamos presentando problemas con el servidor")
    }
  }

  useEffect(()=>{
    getApi()
  },[])

  //console.log(lista);
  return (
    <div className='container'>
      <div className="separador"></div>
      <h2 className="titulo-videos">CONTENIDO</h2>
      
      
      {isLoading ? ( <p className='text-white text-center'><Spinner isLoading={isLoading} /></p> ) : (
        <div className='row row-cols-1 row-cols-md-3 g-4'>
        {
          lista.map(({id, attributes})=>(
            <div key={id} className="col efecto-cards">
            
            <div className="card h-100 bg-dark" >
              
              {
                attributes.miniatura && attributes.miniatura.data && attributes.miniatura.data.length > 0 && (
                  <div>
                    {attributes.miniatura.data.map((img)=>{
                      const imageUrl = img.attributes.url || "";
                      return(
                        <img src={`https://jvaldez.duckdns.org:8443${imageUrl}`} key={img.id} className="card-img-top" alt="" />
                      )
                    })}
                  </div>
                )
              }
              <div className="card-body">
                <Link to={`/contenido/${id}`} className="card-title text-white">{attributes.titulo}</Link>
                <p className="card-text text-white mt-4 fw-light">{attributes.descripcion}</p>
                
              </div>
            </div>
            
          </div>
          ))
        }
   

      </div>
      )}

      <footer className="es-footer">
        &copy;2023 AngeloDevsweb.github.io - All rights reserved.
      </footer>
    </div>
  )
}

export default Contenido