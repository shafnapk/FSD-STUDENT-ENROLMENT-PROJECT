require('./config/passportConfig')

const StudentData = require('./models/studentData');
const EmployerData = require('./models/employer.model');
const nodemailer=require('nodemailer')
const User = mongoose.model('User');
const express=require('express');

const bodyParser=require('body-parser');
const cors = require('cors');
const mongoose =require("./db.js");

const app=express();
const passport=require('passport')
app.use(bodyParser.json());
app.use(cors())
app.use(passport.initialize())

const studentsignupdata=require('./models/studentsignup')
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`Server Started @ ${PORT}`))
app.post('/signupStudent',function(req,res){   
    console.log(req.body);
    var studentsSignup = {
        StudentName:req.body.StudentName,  
        Email:req.body.Email,
        Password:req.body.Password};
    
   var studentsSignup = new studentsignupdata(studentsSignup);
   studentsSignup.save((err,doc)=>{
    if(!err)
        res.send(doc);
    else
    {
        if(err.code==11000)
            res.status(422).send('Email already exist');
        else
            return next(err);

    }
   });
});






module.exports.authenticate=(req,res,next)=>{
    passport.authenticate('local',(error,student,info)=>{
            if(err) return res.status(400).json(err);
    })

}



// umar index

//send mail function
async function employeeMail(data){
    try{
        
  const msg ={
  
    from : "ICT Academy Kerala <ptest5651@gmail.com>",
  
    to : data,
    subject:"ICTAK enrolment Approval",
    text : "Student Registration has been  successfully approved"
  
  };
  
  nodemailer.createTransport({
  service: 'gmail',
  auth :{
    user : "ptest5651@gmail.com",
    pass : "pcpdcpuhvokfbeuy"
  },
  pory:465,
  host:'smtp.gmail.com'
  
  })
  
  .sendMail(msg,(err)=>{
    if(err){
        return console.log('error occurs',err)
    }
    else{
        return console.log('emailsent')
    }
  }
  
  
  )
  
  
    }
    catch(error){
        return error
    }
  }
  
  
  // create student
  app.post('/api/student/register', (req, res)=> {
    console.log(req.body);
  
    var student = {
      name: req.body.name ,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      qualification: req.body.qualification,
      passout: req.body.passout,
      skills: req.body. skills,
      employmentStatus: req.body.employmentStatus,
      techtraining: req.body. techtraining,
      course:req.body. course,
      image:req.body.image,
      exitexammark:req.body.exitexammark,
      status:"Pending"
    };
  
    console.log('student profile - backend', student)
  
    var newStudent = new StudentData(student);
    newStudent.save();
  
  })
  
  
 
  
  //delete  student by id
  app.delete('/api/student/delete/:id',(req,res)=>{  
    id = req.params.id;
    StudentData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  });
  
  
  // get single student using _id
  app.get('/api/student/:id',function(req,res){  
    res.header("Acces-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD"); 
    console.log('id')
    let id=req.params.id;
    StudentData.findOne({_id:id},function(err,student){ 
        res.send(student)
    })
  });
  
  // update student
  app.put('/api/update-student',(req,res)=>{
    res.header("Acces-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD"); 
    console.log(req.body)
    let id=req.body.student._id
    StudentData.findByIdAndUpdate({"_id":id},
    {
        $set:{
            name:req.body.student.name ,
            email:req.body.student.email,
            phone:req.body.student.phone,
            address:req.body.student.address,
            qualification:req.body.student.qualification,
            passout:req.body.student.passout,
            skills:req.body.student.skillset,
            employmentStatus:req.body.student.employmentStatus,
            techtraining:req.body.student.technologyTraining,
            course:req.body.student.course,
            exitexammark:req.body.student.exitexammark
            }
    }) .then((data)=>{
    console.log(data); 
    res.send(data)
  })
  })
  
  //Approve student
  
  app.post('/api/approve-student',(req,res)=>{
    res.header("Acces-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD");
    StudentData.updateOne(
        { 
            _id: req.body.id 
        },
        {
            $set: { 'status': 'Approved'} 
        }).then((data)=>{
          StudentData.findOne({_id:req.body.id},function(err,employee){ 
              employeeMail(employee.email).then((response)=>{
           console.log(response);
                 res.send();
                })
            })
        })
      })
  
  
  
  // create employer
  app.post('/api/employer/register', (req, res)=> {
    console.log(req.body);
  
    var employer = {
      organisationname: req.body.organisationname ,
      email: req.body.email,
      
    };
  
    console.log('employer profile - backend', employer)
  
    var newEmployer = new EmployerData(employer);
    newEmployer.save();
  
  })
  
  
  //get all employer
  app.get('/api/employer', (req, res)=> {
  
    EmployerData.find()
      .then((data)=> {
        console.log(data);
        res.send(data);
      });
  })
  //delete  employer by id
  app.delete('/api/employer/delete/:id',(req,res)=>{  
    id = req.params.id;
    EmployerData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  });