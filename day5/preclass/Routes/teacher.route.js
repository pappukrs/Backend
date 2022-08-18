const {Router}=require('express');

const teachers=Router();




teachers.post('/create',(req,res)=>{
    res.send("teachers create request")
});

teachers.put('/update',(req,res)=>{
    res.send("teachers update request")
});
teachers.get('/get',(req,res)=>{
    res.send("teachers get")
});
teachers.delete('/delete',(req,res)=>{
    res.send("teachers delete method")
})


module.exports=teachers;