/* eslint-disable react/prop-types */
// Spinner.js
import "../Spinner.css"; // Asegúrate de ajustar la ruta al archivo Spinner.css

function Spinner({ isLoading }) {
  return (
    <div className={`spinner ${isLoading ? "active" : ""}`}>
      {/* El spinner se muestra aquí */}
    </div>
  );
}

export default Spinner;
