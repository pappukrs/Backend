const fs=require("fs");

 function read(file){

    fs.readFile(`./${file}`,"utf8",(err,data)=>{
        if(err){
            console.log(err);
        }
        console.log(data);
    });
}
function rename(old,newfile){
   fs.renameSync(old,newfile);
}

function deletefile(file){
   fs.unlinkSync(file);
}

function createFile(path,content){
   fs.writeFile(path,content,(err)=>{
      if(err)console.log(err);
      console.log("file created successfully");
   })
}

function appendContent(path,content){
   fs.appendFile(path,content,(err)=>{
      if(err){
         console.log(err)
      }
      console.log("content appended successfully");
   })
}
const process=require("process");
const cmd=process.argv;


if(cmd[2]==="read"){
   read(cmd[3]);
}

else if(cmd[2]==="delete"){
   deletefile(cmd[3]);
 }

 
else if(cmd[2]==="create"){
   createFile(cmd[3],cmd[4]);
 }

 else if(cmd[2]==="rename"){
    rename(cmd[3],cmd[4]);
 }

 else if(cmd[2]==="append"){
   appendContent(cmd[3],cmd[4]);
 }
 else if(cmd[2]==="list"){
    console.log(read());
 }
 






