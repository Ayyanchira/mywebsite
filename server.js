console.log('Yes! I am getting called. Dont worry');

a = 5;
b = 10;
c = a*b;

console.log('Addition of '+a+' and '+b+' is '+c);

// Now to create a server you need http package. So create a variable which is http handle

var http = require('http');

http.createServer(function(req,res){
    console.log('requested url is '+req.url);
    res.end(JSON.stringify({
        name : 'Akshay',
        age : 25
    }));
}).listen(3000)

console.log('Server listening to port 3000');