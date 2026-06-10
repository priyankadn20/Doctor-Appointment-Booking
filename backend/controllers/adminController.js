import validator from 'validator'
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from 'cloudinary'
import doctorModel from '../models/doctorModel.js'
import JWT from 'jsonwebtoken'

//api for adding doctor by admin
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, specialization, degree, experience, about, available, fees, address } = req.body
        const imageFile = req.file

        //checking for all data to add doctor
        if (!name || !email || !password || !specialization || !degree || !experience || !about || !available || !fees || !address || !imageFile) {
            return res.status(400).json({ success: false, message: 'All fields are required' })
        }

        //validating email format
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: 'Invalid email format' })
        }

        //validating strong password 
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: 'please enter a stronger Password' })
        }

        // hashing the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //uploading image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
            resource_type: "image"
        });

        console.log('Upload result:', imageUpload)

        const imageUrl = imageUpload.secure_url

        const doctorData = {
            name,
            email,
            password: hashedPassword,
            image: imageUrl,
            specialization,
            degree,
            experience,
            about,
            available,
            fees,
            address: JSON.parse(address),
            date: Date.now()
        }

        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()

        res.status(201).json({ success: true, message: 'Doctor added successfully' })

    } catch (error) {
        console.error('Full error:', JSON.stringify(error, null, 2))
        res.status(500).json({ success: false, message: 'Error adding doctor', error })
        console.error('Error adding doctor:', error)
    }
}

//API for the admin login
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            
           const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.status(200).json({ success: true, message: 'Admin logged in successfully', token })

        } else {
            res.status(401).json({ success: false, message: 'Invalid email or password' })
        }

    } catch (error) {
        console.error('Error logging in admin:', error)
        res.status(500).json({ success: false, message: 'Error logging in admin', error })
    }
}

export { addDoctor, loginAdmin };