const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Rutas
app.use('/api/mocks', require('./routes/mocks.router'));

// Configuración del puerto
const PORT = process.env.PORT || 3000;

// Conexión a la base de datos
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        console.error('Error conectándose a la base de datos:', error);
        process.exit(1);
    }
};

connectDB();

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
