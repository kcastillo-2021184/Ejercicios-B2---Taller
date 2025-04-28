import express from 'express';
import cors from 'cors';
import ejerciciosRoutes from '../src/Ejercicios.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Usar las rutas importadas
app.use('/', ejerciciosRoutes);

export default app;
