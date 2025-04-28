
import app from './configs/app.js';

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
