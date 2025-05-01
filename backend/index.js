import express from "express"
import { port, mongoDBURL } from './config.js'
import mongoose from "mongoose"
import booksRoute from "./routes/booksRoute.js"
import cors from "cors"

const app = express()


app.use(express.json())

app.use(cors())

app.use('/books', booksRoute)


mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');

        app.listen(port, () => {
            console.log(`Running a server on port: ${port}`);
        })

    })
    .catch((err) => {
        console.error(err);

    })


