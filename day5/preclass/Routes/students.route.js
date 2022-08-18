


const {Router}=require('express');

const students=Router();




students.post('/create',(req,res)=>{
    res.send("students create request")
});

students.put('/update',(req,res)=>{
    res.send("students update request")
});


students.get('/get',(req,res)=>{
    res.send("students get")
});

students.delete('/delete',(req,res)=>{
    res.send("students delete method")
})

module.exports=students;
