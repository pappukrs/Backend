const process=require('process');
command=process.argv;
// console.log(command);

const {add,sub,mul,divid,sin,cos,tan}=require("./Calculator");
const{Ran}=require("./Random");

if(command[2]==="add"){
   console.log(add(+command[3],+command[4]));
}
 
else if(command[2]==="sub"){
    console.log(sub(+command[3],+command[4]));
 }

 else if(command[2]==="mul"){
    console.log(mul(+command[3],+command[4]));
 }

 else if(command[2]==="divid"){
    console.log(divid(+command[3],+command[4]));
 }
 else if(command[2]==="Ran"){
    console.log(Ran(+command[3],+command[4]));
 }

 else if(command[2]==="sin"){
    console.log(sin(+command[3],+command[4]));
 }
 else if(command[2]==="cos"){
    console.log(cos(+command[3],+command[4]));
 }
 else if(command[2]==="tan"){
    console.log(tan(+command[3],+command[4]));
 }