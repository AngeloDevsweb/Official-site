/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import ReactPlayer from "react-player";

const Details = () => {
  const { id } = useParams();

  const [objeto, setObjeto] = useState({});

  useEffect(() => {
    const obtenerDetalles = async () => {
      try {
        const response = await axios.get(
          `https://jvaldez.duckdns.org:8443/api/contenidos/${id}`
        );
        //console.log("Respuesta de la API:", response);
        if (response.status === 200) {
          const { data } = response;
          if (data && data.data && data.data.attributes) {
            setObjeto(data.data.attributes);
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
    };

    obtenerDetalles();
  }, [id]);

  //console.log(objeto);

  return (
    <div className="container">
      <div className="separador"></div>

      <div className="caja-detalle">
        <ReactMarkdown className="text-white">
          {objeto.textoLargo}
        </ReactMarkdown>

        <div className="contenedor-reproductor">
          <ReactPlayer
            url={objeto.url}
            width="100%"
            height="100%"
            controls
            className=""
          />
        </div>

        <div className="mt-3 mb-3">
          <a className="enlace-details" href={objeto.linkrepo} target="_blank">
            Enlace de github: {objeto.linkrepo}
          </a>
                  {/* 
                  <a
          className="enlace-details"
          href={objeto.linkrepo === "repositorio no valido" ? "https://www.youtube.com" : objeto.linkrepo}
          target="_blank"
        >
          Enlace de github: {objeto.linkrepo}
        </a> */}
        </div>

        <Link className="volver-atras" to="/contenido">
          Volver Atras
        </Link>
      </div>

      {/* seccion del footer  */}

      <footer className="es-footer">
        &copy;2023 AngeloDevsweb.github.io - All rights reserved.
      </footer>
    </div>
  );
};

export default Details;
