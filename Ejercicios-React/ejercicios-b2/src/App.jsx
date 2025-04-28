import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="main-container">
      <h1>Ejercicios Backend - Frontend</h1>
      <nav>
        <ul>
          <li><Link to="/validar-password">Validar Password</Link></li>
          <li><Link to="/convertir-temperatura">Convertir Temperatura</Link></li>
          <li><Link to="/romano-a-entero">Romano a Entero</Link></li>
          <li><Link to="/generar-password">Generar Password</Link></li>
        </ul>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/validar-password" element={<div>Validar Password Vista</div>} />
          <Route path="/convertir-temperatura" element={<div>Convertir Temperatura Vista</div>} />
          <Route path="/romano-a-entero" element={<div>Romano a Entero Vista</div>} />
          <Route path="/generar-password" element={<div>Generar Password Vista</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
