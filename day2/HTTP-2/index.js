const exp=require('express');

const app=exp();

app.get('/',(req,res)=>{
    res.send("Homepage")
})


app.get("/user",(req,res)=>{

    res.send("user")
})

app.get("/obj",(req,res)=>{

    res.send({name:"pappu",roll:675})
})



app.listen(4000,()=>{
    console.log("server running on port 4000")
});