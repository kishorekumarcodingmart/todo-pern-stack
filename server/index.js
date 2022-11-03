import express  from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import add from './routes/add.js';
import view from './routes/view.js';
import update from './routes/update.js';
import deleted from "./routes/delete.js"

const app = express();

// middleware
app.use(cors())
app.use(bodyParser.json());

// Routes
app.use('/',add)
app.use('/',view)
app.use('/',update)
app.use('/',deleted)

app.listen(process.env.PORT || 7000, ()=>{
    console.log("Running on http://localhost:7000")
})