const express=require('express');

const app=express();
app.use(express.json())
let todos=[];

app.get('/todos',(req,res)=>{

   return  res.send({
        todos
    })
});

app.post('/todo',(req,res)=>{
    try {
        const {todo}=req.body;
        const {task}=todo;
    //    console.log(task,"todo");

    let max=0;

    todos.forEach((todo)=>{
        max=Math.max(max,todo.id)
    });
        let data={
            id:max+1,
            task:task,
            createdAt:new Date()
        }
        todos.push(data)
        return res.send("all todos has been added .fetch all todos to get list")

    } catch (ex) {
        return res.status(500).send("Internal server error");
    }
})

app.delete('/todo/:id',(req,res)=>{
    const {id}=req.params;
    
    let index=null;

    todos.forEach((todo,i)=>{
       if(todo.id=== parseInt(id)){
        index=i;
       }
    })

    if(index===null){
        return res.status(404).send("Todo does not exist");
    }
    else{
       todos.splice(index,1);
        return res.send("Deleted refresh todo");
    }


})

app.listen(8000,()=>{
    console.log("server is running on 8000 port ");
})