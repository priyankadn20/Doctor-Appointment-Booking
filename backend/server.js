import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import 'dotenv/config'
import mongoose from 'mongoose'
import connectDB from './config/mongodb.js'

//app config

const app = express()
const port = process.env.PORT || 4000

//middleware
app.use(express.json())
app.use(cors())
connectDB()

//api endpoints
app.get('/', (req, res) => {
    res.send('API is Working')
})

//listen
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})