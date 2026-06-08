import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import 'dotenv/config'
import mongoose from 'mongoose'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRoute from './routes/adminRoute.js'

//app config

const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

import {v2 as cloudinary} from 'cloudinary'
console.log('Cloudinary config:', cloudinary.config())

//middleware
app.use(express.json())
app.use(cors())


//api endpoints
app.use('/api/admin', adminRoute)
//localhost:4000/api/admin/add-doctor

//api endpoints
app.get('/', (req, res) => {
    res.send('API is Working')
})

//listen
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})