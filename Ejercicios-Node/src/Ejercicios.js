// 1. Validar Contraseña

export const validarPassword = (req, res) => {
    const { password } = req.body
    const errores = []
 
    if (!password) {
      return res.status(400).res(
            {
                success: false,
                errores: ["No se recibió contraseña"]
            }
        )
    }
 
    if (password.length < 8) errores.push("Debe tener al menos 8 caracteres")
    if (!/[A-Z]/.test(password)) errores.push("Debe tener al menos una letra mayúscula")
    if (!/[a-z]/.test(password)) errores.push("Debe tener al menos una letra minúscula")
    if (!/[0-9]/.test(password)) errores.push("Debe tener al menos un número")
    if (!/[^A-Za-z0-9]/.test(password)) errores.push("Debe tener al menos un símbolo")
 
    res.send(
        {
        success: errores.length === 0,
        errores,
        valida:true
        }
    )
}

// 2. Convertir numero Romano a decimal
export const romanoAEntero = (req, res) => {
    const { romano } = req.body
    if (!romano) {
        return res.status(400).send(
            { 
                success: false,
                message: "No se recibió número romano" 
            }
        )
    }
  
    const mapa = {
      'I': 1, 'V': 5, 'X': 10,
      'L': 50, 'C': 100, 'D': 500, 'M': 1000
    }
    let total = 0
    let previo = 0
  
    for (let i = romano.length - 1; i >= 0; i--) {
      const valor = mapa[romano[i]]
      if (!valor) {
        return res.status(400).send(
            {
                success: false,
                message: 'No es un número romano válido'
            }
        )
      }
      if (valor < previo) {
        total -= valor
      } else {
        total += valor
        previo = valor
      }
    }
  
    return res.status(200).send(
        {
            success: false,
            message: 'No es un número romano válido'
        }
    )
}

// 3 Converción de grados
export const convertirTemperatura = (req, res) => {
    const { valor, unidad } = req.body
    if (typeof valor !== 'number' || !unidad) {
      return res.status(400).send({ message: "Datos inválidos" })
    }
  
    let C, F, K
    switch (unidad.toUpperCase()) {
      case 'C':
        C = valor
        F = (valor * 9/5) + 32
        K = valor + 273.15
        break
      case 'F':
        C = (valor - 32) * 5/9
        F = valor
        K = C + 273.15
        break
      case 'K':
        C = valor - 273.15
        F = (C * 9/5) + 32
        K = valor
        break
      default:
        return res.status(400).send({ message: "Unidad inválida" })
    }
  
    res.send({
      C: parseFloat(C.toFixed(2)),
      F: parseFloat(F.toFixed(2)),
      K: parseFloat(K.toFixed(2))
    })
}
  
//Generador de Contraseñas Aleatorias
export const randomPass = (req, res) => {
  const { longitud, mayusculas, numeros, simbolos } = req.body;
  if (!longitud || typeof longitud !== 'number') {
    return res.status(400).send({ message: "Longitud inválida" });
  }
 
  let caracteres = 'abcdefghijklmnopqrstuvwxyz';
  if (mayusculas) caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (numeros) caracteres += '0123456789';
  if (simbolos) caracteres += '!@#$%^&*()_+[]{}|;:,.<>?';
 
  let password = '';
  for (let i = 0; i < longitud; i++) {
    password += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
 
  res.send({ password });
}