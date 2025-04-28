import { Routes, Route, Link } from 'react-router-dom';
import ValidarPassword from './components/ValidarPassword';
import ConvertirTemperatura from './components/ConvertirTemperatura';
import RomanoAEntero from './components/RomanoAEntero';
import GenerarPassword from './components/GenerarPassword';
import './App.css';

function App() {
  return (
    <div className="main-container"> 
      <br /><br /><br /><br /><br /><br />
      <h1>Ejercicios Backend - Frontend</h1>

      <nav>
        <ul>
          <li><Link to="/validar-password">Validar Password</Link></li>
          <li><Link to="/convertir-temperatura">Convertir Temperatura</Link></li>
        </ul>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/validar-password" element={<ValidarPassword />} />
          <Route path="/convertir-temperatura" element={<ConvertirTemperatura />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
