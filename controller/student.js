
const Student = require('../models/student')

const getAllStudents = async (req, res) => {
    try {
        const result = await Student.getAllStudents();
        res.status(200).send(result)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
module.exports = {
    getAllStudents
}