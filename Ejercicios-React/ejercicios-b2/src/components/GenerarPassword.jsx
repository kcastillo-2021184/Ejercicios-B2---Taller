import React, { useState } from 'react';
import axios from 'axios';
 
function GenerarPassword() {
  const [longitud, setLongitud] = useState(12);
  const [mayusculas, setMayusculas] = useState(true);
  const [numeros, setNumeros] = useState(true);
  const [simbolos, setSimbolos] = useState(true);
  const [password, setPassword] = useState('');
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/generar-password', {
        longitud: Number(longitud),
        mayusculas,
        numeros,
        simbolos
      });
      setPassword(res.data.password);
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
          placeholder="Longitud (mínimo 4)"
          min="4"
          value={longitud}
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
 
      {password && (
<div style={{ marginTop: '1rem' }}>
<p>Contraseña Generada:</p>
<strong>{password}</strong>
</div>
      )}
</div>
  );
}
 
export default GenerarPassword;