console.log('Yes! I am getting called. Dont worry');

a = 5;
b = 10;
c = a*b;

console.log('Addition of '+a+' and '+b+' is '+c);

// Now to create a server you need http package. So create a variable which is http handle

var http = require('http');

http.createServer(function(req,res){

res.writeHead(200,{
    'Content-Type' : 'Text/HTML'
})

if (req.url == "/home"){
    res.end(JSON.stringify({
        name : "Akshay"
    }));
}else if (req.url == "/about"){
    res.end(JSON.stringify({
        age : 25,
        education : "Masters in University of North Carolina at Charlotte",
        Interests : "Mobile App Development, Mixed Reality, Web development"
    }))
}else{
    res.end(JSON.stringify({
        message : "This is generic error message. Links are not ready yet..."
    }))
}


}).listen(3000)

console.log('Server listening to port 3000');