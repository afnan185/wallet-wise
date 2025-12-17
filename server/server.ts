import dotenv from "dotenv";
dotenv.config();
import express , {Request,Response, NextFunction} from 'express';
import app from './app'

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))