
/*
//our code
const express = require('express');
const fs = require('fs');

const app = express()
const port = 3000

app.get('/', function(req, res)
{
    fs.readFile("homepage.html", function(err, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
    //res.send("welcome to the railway concession application page ")
    console.log("home page running");
})

app.get('/login', function(req, res)
{
    fs.readFile("loginpage.html", function(err, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
    //res.send("enter your details to login")
    console.log("login page running");
})

app.get('/signup', function(req, res)
{
    fs.readFile("signuppage.html", function(err, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
    //res.send("enter your details to signup")
    console.log("signup page running");
})

app.listen(3000, function(req, res) 
{
    
    console.log("server running on port 3000");
}
)*/


const http = require('http');
 
const PORT = process.env.PORT || '3000';
 
const server = http.createServer((req, res) => {
  res.writeHead(200,{'Content-Type': 'text/plain'});
  res.end('Hello world!');
});
 
server.listen(3000);