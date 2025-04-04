const express=require('express');
const router=express.Router();
const student=require('../controller/student');

router.get('/',student.getAllStudents);

module.exports = router;