import {createServer} from "http";
import fs from "fs";
const appHttp =createServer((req,res)=>{
  if(req.url == "/"){
   fs.readFile("index.html", "utf8", (err, data)=>{
    res.end(data);
   });
  }else if(req.url == "/home"){
    fs.readFile("prueba.html", "utf8", (err, data)=>{
      res.end(data);
    })
   }
});
const config = {
  hostname: "127.1.1.1",
  port: 5000
};
appHttp.listen(config,()=>{
    console.log(`http://${config.hostname}:${config.port}`);
})