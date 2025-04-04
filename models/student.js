const database=require('../config/connectDB')

const getAllStudents=async()=>{
    const sql="SELECT * FROM student";
    const [data]=await database.query(sql);
    return data;
}
module.exports={
    getAllStudents
};