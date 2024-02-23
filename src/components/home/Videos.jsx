/* eslint-disable react/jsx-no-target-blank */
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Spinner from '../Spinner'

const Videos = () => {

  const [videos, setVideos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getApi = async()=>{
    try {
      const {data} = await axios.get('https://jvaldez.duckdns.org:8443/api/homes?populate=*')
    setVideos(data.data)
    setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      alert("Lo sentimos en este momento estamos experimentando problemas con el servidor")
    }
  }

  useEffect(()=>{
    getApi()
  },[])

  
  return (
    <div>
      <h3 className="titulo-videos">VIDEOS</h3>
      <div className="separador"></div>
      
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {isLoading ? (<Spinner isLoading={isLoading} />): (
          
          videos.map(({id, attributes})=>(
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
                <h4 className="card-title text-white">{attributes.titulo}</h4>
                <p className="card-text text-white mt-4 fw-light">{attributes.descripcion}</p>
                <div className='contenedor-card'>
                  <a className='link-card' href={attributes.url} target='_blank'>♠ Mira el video</a>
                  <img src={attributes.linklogo} className='logo-card' alt="" />
                </div>
              </div>
            </div>
            
          </div>
          ))
        )}
   

      </div>


    </div>
  )
}

export default Videos
