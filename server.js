console.log('Yes! I am getting called. Dont worry');

a = 5;
b = 10;
c = a*b;

console.log('Addition of '+a+' and '+b+' is '+c);

// Now to create a server you need http package. So create a variable which is http handle

var http = require('http');

http.createServer(function(req,res){
    console.log('You just created a server which listens to port 3000');
}).listen(3000)