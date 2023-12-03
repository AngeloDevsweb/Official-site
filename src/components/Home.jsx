import ReactPlayer from "react-player";
import Next from "../assets/next.png";
import Figma from "../assets/figma.png";
import Vite from "../assets/vite.png";
import ReactNative from "../assets/reactnative.png";
import Vscode from "../assets/vscode.webp";
import Videos from "./home/Videos";

const Home = () => {
  return (
    <div className="container">
      <div className="separador"></div>

      {/* contenido primer seccion */}
      <div className="row">
        <div className="col-md-6">
          <h2 className="titulo">React Native VS Flutter</h2>
          <p className="parrafo">
            Si estas empezando en el mundo del desarrollo web y aun estas
            indeciso sobre que tecnologia movil multi plataforma deberias
            utilizar, en este video encontraras las diferencias entre uno y
            otro. Comprenderas el porque de su uso y tendras una idea mas clara
            de con cual puedes comenzar tu aprendizaje, obviamente tu tendras la
            decision de cual te parece mejor.
          </p>
          <p className="parrafo">
            Puedes ver este video en la plataforma de youtube si tienes interes
            en el desarrollo web te invito a mi canal donde encontraras mucha
            informacion sobre frontend web, react, ademas de react native para
            desarrollo web multiplataforma.
          </p>
        </div>
        <div className="col-md-6">
          <div className="content">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=IHtWLMSVCg0"
              width="100%"
              height="100%"
              controls
              className="react-player"
            />
          </div>
        </div>
      </div>

      {/* segunda seccion */}
      <h3 className="titulo-logos">TECNOLOGIAS DE DESARROLLO</h3>
      <div className="contenedor-logos">
        <img src={Next} alt="logo next" className="estilo-logo" />
        <img src={Vite} alt="logo next" className="estilo-logo" />
        <img src={Vscode} alt="logo next" className="estilo-logo" />
        <img src={ReactNative} alt="logo next" className="estilo-logo" />
        <img src={Figma} alt="logo next" className="estilo-logo" />
      </div>

      {/* tercer seccion contenido de videos */}

      <Videos />

      {/* seccion del footer  */}

      <footer className="es-footer">
        &copy;2023 AngeloDevsweb.github.io - All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
