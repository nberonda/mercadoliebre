const express = require('express');
const path = require('path');

const app = express();

publicPath= path.resolve(__dirname, './public');

app.use(express.static(publicPath));

app.get ('/', function(req,res) {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get ('/register', function(req, res) {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get ('/log-in', function(req, res) {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.get ('/ayuda', function(req, res) {
    res.sendFile(path.resolve(__dirname, './views/ayuda.html'))
})

app.listen (3000, () => {
    console.log ('funka http://localhost:3000');
});