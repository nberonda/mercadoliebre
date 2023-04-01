const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

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

app.listen(port, () =>console.log ('Servidor corriendo en el puerto $(port)'))