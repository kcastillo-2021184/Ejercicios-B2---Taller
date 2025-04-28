import React, { useState } from 'react';
import axios from 'axios';
 
function RomanoAEntero() {
  const [romano, setRomano] = useState('');
  const [resultado, setResultado] = useState(null);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/romano-a-entero', { romano });
      setResultado(res.data);
    } catch (error) {
      console.error('Error al convertir número romano', error);
    }
  };
 
  return (
<div>
<h2>Romano a Entero</h2>
<form onSubmit={handleSubmit}>
<input
          type="text"
          placeholder="Ingrese número romano (ej: XIV)"
          value={romano}
          onChange={(e) => setRomano(e.target.value)}
        />
<button type="submit">Convertir</button>
</form>
 
      {resultado && (
<div>
          {resultado.entero !== undefined ? (
<p>Resultado: {resultado.entero}</p>
          ) : (
<p>{resultado.message}</p>
          )}
</div>
      )}
</div>
  );
}
 
export default RomanoAEntero;