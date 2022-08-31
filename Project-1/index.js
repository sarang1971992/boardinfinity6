// creating server
import http from 'http';
import fs from 'fs';
import url from 'url';


const server = http.createServer((req,res) => {

    //res.setHeader('Content-Type','text-plain');
    //res.end("Response from Sarang server");

    if(req.url === "/age"){
        fs.readFile('./API/userapi.json',"utf-8",(err,data) =>{
              res.end(data);
        });
        
        // const queryObject = url.parse(req.url, true);
        // //console.log(queryObject);
        // //res.end(queryObject.name);
        // res.write('Hello'  + queryObject + ' ' );
        // res.end("hello");

        
       }

 
}); 

const PORT = process.env.PORT || 8000;
const HOST = 'localhost';

server.listen(PORT,HOST, () =>{
    console.log("Server Running");
});

