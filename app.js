import {createServer} from "http";
const appHttp =createServer((req,res)=>{
    res.end();
});


const config = {
  hostname: "127.1.1.1",
  port: 5005
};

appHttp.listen(config,()=>{
    console.log('servidor activo');
});