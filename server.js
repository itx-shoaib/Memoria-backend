import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

// Connecting database
mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })

var connection = mongoose.connection

connection.on('error', () => {
    console.log('Mongodb connection failed')
})

connection.on('connected', () => {
    console.log('successfully connected to mongodb')
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Node server started by using nodemon on port ${port} `))