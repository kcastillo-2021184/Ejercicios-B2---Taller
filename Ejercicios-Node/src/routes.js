import express from 'express'
import { romanoAEntero, validarPassword } from './Ejercicios.js'
const api = express.Router()

api.post('/validar-password', validarPassword)
api.post('/romano-a-entero', romanoAEntero)

export default api