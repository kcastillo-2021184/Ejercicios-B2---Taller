import React, { useState } from 'react';
import axios from 'axios';
 
function ConvertirTemperatura() {
  const [valor, setValor] = useState('');
  const [unidad, setUnidad] = useState('C');
  const [resultado, setResultado] = useState(null);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/convertir-temperatura', {
        valor: parseFloat(valor),
        unidad
      });
      setResultado(res.data);
    } catch (error) {
      console.error('Error al convertir temperatura', error);
    }
  };
 
  return (
<div>
<h2>Convertir Temperatura</h2>
<form onSubmit={handleSubmit}>
<input
          type="number"
          placeholder="Valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
<select value={unidad} onChange={(e) => setUnidad(e.target.value)}>
<option value="C">Celsius</option>
<option value="F">Fahrenheit</option>
<option value="K">Kelvin</option>
</select>
<button type="submit">Convertir</button>
</form>
 
      {resultado && (
<div>
          {resultado.message ? (
<p>{resultado.message}</p>
          ) : (
<ul>
<li>Celsius: {resultado.C} °C</li>
<li>Fahrenheit: {resultado.F} °F</li>
<li>Kelvin: {resultado.K} K</li>
</ul>
          )}
</div>
      )}
</div>
  );
}
 
export default ConvertirTemperatura;