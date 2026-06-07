

//api for adding doctor by admin
const addDoctor = async (req, res) => {
    try{
        const {name, email, password, specialization, degree, experience, about, available, fees, address} = req.body
        const imageFile = req.file

        console.log({name, email, password, specialization, degree, experience, about, available, fees, address, imageFile})
        

    }catch(error){
        res.status(500).json({message: 'Error adding doctor', error})
    }
}

export {addDoctor};