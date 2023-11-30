import ReactPlayer from 'react-player'

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
          <p className="parrafo">Puedes ver este video en la plataforma de youtube si tienes interes 
            en el desarrollo web te invito a mi canal donde encontraras mucha informacion
            sobre frontend web, react, ademas de react native para desarrollo web multiplataforma.
          </p>
        </div>
        <div className="col-md-6">
        <ReactPlayer url='https://www.youtube.com/watch?v=IHtWLMSVCg0' />
        </div>
      </div>
    </div>
  );
}

export default Home
