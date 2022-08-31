import http from 'http';
import url from 'url';



http.createServer((req,res) => {
   res.writeHead(200,{'Content-Type':'text/html'});
   var queryObject = url.parse(req.url,true).query;
   
 
   //age Calculation code
   var currentDate = new Date();
   var currentYear = currentDate.getFullYear();
   var age = currentYear - queryObject.year;
   
   res.write('<p>' + "Hello "   +queryObject.name+ '</p>');  
   res.write('<p>' + "You are Currently "   +age+  " years old" + '</p>');  
   res.end();
   
   
}).listen(8000);