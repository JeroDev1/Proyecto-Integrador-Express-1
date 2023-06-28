const express = require('express');
const app = express();

// Definir una lista de tareas
const tasks = [
  {
    id: '123456',
    isCompleted: false,
    description: 'Walk the dog',
  },
  // Agrega más tareas aquí si lo deseas
];

// Ruta para obtener la lista de tareas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Iniciar el servidor en el puerto 3000 (o cualquier otro puerto que desees)
app.listen(3000, () => {
  console.log('Servidor Express iniciado en el puerto 3000');
});