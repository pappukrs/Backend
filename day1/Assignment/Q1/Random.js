const rn=require('crypto');


const Ran=(a,b)=>{
    return rn.randomInt(a,b);
}

module.exports={Ran};