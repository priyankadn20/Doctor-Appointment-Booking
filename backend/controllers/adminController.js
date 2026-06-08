import validator from 'validator'
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from 'cloudinary'
import doctorModel from '../models/doctorModel.js'

//api for adding doctor by admin
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, specialization, degree, experience, about, available, fees, address } = req.body
        const imageFile = req.file

        console.log({ name, email, password, specialization, degree, experience, about, available, fees, address, imageFile })

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
        console.log('Password hashed successfully')
        //uploading image to cloudinary
       const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
     upload_preset: 'prescripto'
})
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

export { addDoctor };