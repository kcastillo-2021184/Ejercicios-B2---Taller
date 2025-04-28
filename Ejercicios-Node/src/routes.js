import express from 'express'
import { romanoAEntero, validarPassword, convertirTemperatura } from './Ejercicios.js'
const api = express.Router()

api.post('/validar-password', validarPassword)
api.post('/romano-a-entero', romanoAEntero)
api.post('/convertir-temperatura', convertirTemperatura)

export default api