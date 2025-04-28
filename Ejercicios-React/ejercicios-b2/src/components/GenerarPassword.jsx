import React, { useState } from 'react';
import axios from 'axios';

function GenerarPassword() {
  const [longitud, setLongitud] = useState(12);
  const [mayusculas, setMayusculas] = useState(true);
  const [numeros, setNumeros] = useState(true);
  const [simbolos, setSimbolos] = useState(true);
  const [passwordGenerada, setPasswordGenerada] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/generar-password', {
        longitud: Number(longitud),
        mayusculas,
        numeros,
        simbolos
      });
      setPasswordGenerada(res.data.password); // ⚡ Aquí guardamos el resultado
    } catch (error) {
      console.error('Error al generar contraseña', error);
    }
  };

  return (
    <div>
      <h2>Generar Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Longitud"
          value={longitud}
          min={4}
          onChange={(e) => setLongitud(e.target.value)}
        />

        <label>
          <input
            type="checkbox"
            checked={mayusculas}
            onChange={(e) => setMayusculas(e.target.checked)}
          />
          Incluir Mayúsculas
        </label>

        <label>
          <input
            type="checkbox"
            checked={numeros}
            onChange={(e) => setNumeros(e.target.checked)}
          />
          Incluir Números
        </label>

        <label>
          <input
            type="checkbox"
            checked={simbolos}
            onChange={(e) => setSimbolos(e.target.checked)}
          />
          Incluir Símbolos
        </label>

        <button type="submit">Generar</button>
      </form>

      {/* Mostrar resultado */}
      {passwordGenerada && (
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Contraseña Generada:</strong></p>
          <p style={{ wordBreak: 'break-word' }}>{passwordGenerada}</p>
        </div>
      )}
    </div>
  );
}

export default GenerarPassword;
