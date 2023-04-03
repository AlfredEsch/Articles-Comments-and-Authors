import mongoose from "mongoose";
import bodyParser from "body-parser";

mongoose.connect("mongodb+srv://alfredeschbaum:******.nzpoyhc.mongodb.net/test\n" +
    "\n");
const database = mongoose.connection;
import articleController from "./controllers/articleController";
import commentController from "./controllers/commentController";
import authorController from "./controllers/authorController";
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

import express, { Express, Request, Response } from "express";


const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', authorController);
app.use('/', commentController);
app.use('/', articleController);

app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
})
