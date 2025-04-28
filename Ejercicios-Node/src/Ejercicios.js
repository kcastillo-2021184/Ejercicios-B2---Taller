import express from 'express'
const router = express.Router()

// 1. Validar Contraseña

router.post('/validar-password', (req, res) => {
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
        errores
        }
    )
}
)

export default router  
