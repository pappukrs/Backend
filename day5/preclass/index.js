
const express=require('express');
const teachersroutes=require('./Routes/teacher.route');
const studentsroutes=require('./Routes/students.route');

const app=express();


app.use((req,res,next)=>{
    console.log("Got request",req.query);

    if(!req.query.apikey){
        res.status(401).send("No api key provided");
    }
   next();
});

app.get('/',(req,res)=>{
    res.send("hello")
})



// app.use('/teachers',teachersroutes);
// app.use('/students',studentsroutes);




app.listen(8000,()=>{
    console.log("server started on 8000 port")
})