import mongoose from 'mongoose';    
import dotenv from 'dotenv';
dotenv.config();

const host = process.env.DB_HOST || 'localhost';
//const host = 'localhost';
const port =  process.env.DB_PORT || 27017;
const database = process.env.DB_NAME || 'test';
const MONGODB_URI = `mongodb://${host}:${port}/${database}`;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log ('conexion satisfactoria a MongoDB'))
.catch((error)=> console.error('Error al conectarse a MongoDB: ', error));

export default mongoose;