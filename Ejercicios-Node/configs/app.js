import express from 'express';
import cors from 'cors';
import ejerciciosRoutes from '../src/Ejercicios.js';
 
const app = express();
 
app.use(cors());
app.use(express.json());
 
// Montar las rutas
app.use('/', ejerciciosRoutes);
 
export default app;