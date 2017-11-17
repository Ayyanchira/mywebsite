var http = require('http');
// using express to implement proper routing i.e the professional way of routing apis
var express = require('express');

var app = express();

app.get('/about',function (req, res){
    console.log('REached in get function');
    res.sendFile(__dirname+'/HTML/about.html');
})

app.listen(4000,function(){
    console.log('Server started using app.js');
})

// http.createServer(function(req,res){

// res.writeHead(200,{
//     'Content-Type' : 'Text/HTML'
// })

// if (req.url == "/home"){
//     res.end(JSON.stringify({
//         name : "Akshay"
//     }));
// }else if (req.url == "/about"){
//     res.end(JSON.stringify({
//         age : 25,
//         education : "Masters in University of North Carolina at Charlotte",
//         Interests : "Mobile App Development, Mixed Reality, Web development"
//     }))
// }else{
//     res.end(JSON.stringify({
//         message : "This is generic error message. Links are not ready yet..."
//     }))
// }


// }).listen(3000)

// console.log('Server listening to port 3000');