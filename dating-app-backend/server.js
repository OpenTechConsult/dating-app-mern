import express from "express";
import mongoose from "mongoose";

// app config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://eagboka:11JTvFlzDBiSf4GD@datingappmerncluster.ujuus.mongodb.net/datingmernappdb?retryWrites=true&w=majority';

// middleware

// db config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// api endpoints
app.get("/", (req, res) => res.status(200).send("Hello World!"));

// listener
app.listen(port, () => console.log(`Listening on port ${port}`));