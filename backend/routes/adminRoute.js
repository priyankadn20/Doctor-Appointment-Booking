import express from 'express'
import { addDoctor } from '../controllers/adminController'
import upload from '../middleware/multer'

const adminRoute = express.Router()

adminRoute.post('/add-doctor', upload.single('image'), addDoctor)

export default adminRoute