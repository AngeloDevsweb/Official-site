import {Link} from 'react-router-dom'
const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-transparent mt-5">
        <div className="container-fluid">
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="">
                <Link className="enlaces" to="/" >
                  HOME
                </Link>
              </li>
              <li className="">
                <Link className="enlaces" to="/contenido" >
                  CONTENIDO
                </Link>
              </li>
              <li className="">
                <Link to="/articulos" className="enlaces">
                  ARTICULOS
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
