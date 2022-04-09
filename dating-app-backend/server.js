import express from "express";
import mongoose from "mongoose";
import Cors from 'cors';

import Card from "./dbCards.js";

// app config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://eagboka:11JTvFlzDBiSf4GD@datingappmerncluster.ujuus.mongodb.net/datingmernappdb?retryWrites=true&w=majority';

// middleware
app.use(express.json());
app.use(Cors());

// db config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// api endpoints
app.get("/", (req, res) => res.status(200).send("Hello World!"));

app.post('/dating/cards', (req, res) => {
    const dbCard = req.body;
    Card.create(dbCard, (err, data) => {
        if (err) { 
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

app.get('/dating/cards', (req, res) => {
    Card.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

// listener
app.listen(port, () => console.log(`Listening on port ${port}`));