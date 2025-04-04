const express=require('express')
const cors=require('cors')
const studentRoute=require('./routes/student')
const app=express()
app.use(cors())
app.use(express.json())

app.use('/student',studentRoute)

app.listen(3000,(err)=>{
    if(err) throw err
    console.log('Server is running on port 3000')
});

