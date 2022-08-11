const http=require("http");

const server=http.createServer((req,res)=>{
  if(req.url==="/"){
    return res.end("homepage")
  }
  if(req.url==="/product"){
    return res.end(JSON.stringify([1,2,3,4,5,6]))
  }
  if(req.url="/web"){
    return res.end("<h1>Hello web</h1>");
  }
  res.end("hello")
})

server.listen(8000,()=>{
    console.log("server started on localHost:8000");
})