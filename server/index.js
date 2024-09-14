// express bodyParser express mongoose cors

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();

import postRoutes from './routes.js';

app.use(bodyParser.json({limit: "3mb", extended: true})); //random value assigned for now!
app.use(cors());

app.use('/grid', postRoutes);

const CONNECTION_URL = 'mongodb+srv://tammyshah2007:Tanmay2007@hackthenorth.hko8s.mongodb.net/?retryWrites=true&w=majority&appName=HackTheNorth';
const PORT = process.env.PORT || 5001;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))) //resolve warnings in console 
    .catch((error) => console.log(error.message));