// import { dirname } from 'path';
var dirname = require('path-__dirname');

var http = require('http');
// using express to implement proper routing i.e the professional way of routing apis
var express = require('express');

var app = express();

app.get('/about',function (req, res){
    console.log('REached in get function');
    res.sendFile(__dirname+'/HTML/about.html');
})

app.get('/getMessagesForPatient',function (req, res){
    console.log('Reached get message function');
    res.sendFile(__dirname+'/JSON/MessageResponse.json');
})

app.get('/getSurveyQuestion',function(req, res){
    console.log('Survey question requested');
    res.sendFile(__dirname+'/JSON/surveyQuestion.json');
})

app.get('/sampleJSONResponseFile',function(req, res){
    console.log('Survey question requested');
    res.sendFile(__dirname+'/JSON/SampleJSONResponse.json');
})

app.get('/enrolledStudy',function(req, res){
    console.log('Studies requested');
    res.sendFile(__dirname+'/JSON/EnrolledStudy.json');
})

app.get('/sampleJSONResponse',function(req, res){
    console.log('Sample Json Requested');
    res.end(JSON.stringify({
        age : 25,
        name : "Mathew Webber",
        interest : "Computer Science"
    }))
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