'use strict';

const fs = require('fs');
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    // 200 status code means OK
    res.status().send(200);
})

var http = require('http');

// Create a server object
http.createServer(function(req, res) {

    // http header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var url = req.url;

    if (url === '/database.json') {
        console.log("reading again");
        const jsonData = require('./database.json');
        console.log(jsonData);
        res.write(' data loaded');
        res.end();

    } else if (url === '/about') {
        console.log("Train management ");
        res.write('Train management');
        res.end();
    
    }
    else if (url === '/contact') {
        console.log("welcome to our app ");
        res.write(' Welcome to our app');
        res.end();
    } 
    else {
      //  res.writeHead(200);
        res.write('Server loaded.');
        res.end();

    }
}).listen(3000, function() {

    // The server object listens on port 3000
    console.log("server start at port 8081");
});

/*
let rawdata = fs.readFileSync('database.json');
let mechanic = JSON.parse(rawdata);
console.log(mechanic); 
*/
//
let managers = {
    "managers":[
        {
            "name": "Alwin",
            "email": "alwingmail.com",
            "phone": "9144879823"
        },
        {
            "name": "Joseph",
            "email": "joseph@gmail.com",
            "phone": "9100997235"
        },
        {
            "name": "Ashwin",
            "email": "ashwin@gmail.com",
            "phone": "9800657341"
        },
        {
            "name": "christy",
            "email": "christy@gmail.com",
            "phone": "8935667832"
        },
]

};

let data = JSON.stringify(managers);

fs.writeFile('./database.json', data, (err) => {
    console.log('WRITTING...');
    if (err) throw err;
    console.log('Data written to file');
});



fs.readFile('./database.json', (err, data) => {
    console.log('READING...');
    if (err) throw err;
    let man = JSON.parse(data);
    console.log(man);

});