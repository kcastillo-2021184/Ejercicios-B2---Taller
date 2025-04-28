import express from 'express'
import { romanoAEntero, validarPassword, convertirTemperatura, randomPass } from './Ejercicios.js'
const api = express.Router()

api.post('/validar-password', validarPassword)
api.post('/romano-a-entero', romanoAEntero)
api.post('/convertir-temperatura', convertirTemperatura)
api.post('/generador-aleatorio', randomPass)

export default api