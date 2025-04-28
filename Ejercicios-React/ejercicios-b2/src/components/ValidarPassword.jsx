import React, { useState } from 'react';

import axios from 'axios';
 
function ValidarPassword() {

  const [password, setPassword] = useState('');

  const [resultado, setResultado] = useState(null);
 
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post('http://localhost:3001/validar-password', { password });

      setResultado(res.data);

    } catch (error) {

      console.error('Error al validar contraseña', error);

    }

  };
 
  return (
<div>
<h2>Validar Contraseña</h2>
<form onSubmit={handleSubmit}>
<input

          type="text"

          placeholder="Ingrese una contraseña"

          value={password}

          onChange={(e) => setPassword(e.target.value)}

        />
<button type="submit">Validar</button>
</form>
 
      {resultado && (
<div>
<p>¿Es válida?: {resultado.valida ? 'Sí' : 'No'}</p>

          {resultado.errores.length > 0 && (
<ul>

              {resultado.errores.map((error, index) => (
<li key={index}>{error}</li>

              ))}
</ul>

          )}
</div>

      )}
</div>

  );

}
 
export default ValidarPassword;

 