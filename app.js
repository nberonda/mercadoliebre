const express = require('express');
const path = require('path');

const app = express();

publicPath= path.resolve(__dirname, './public');

app.use(express.static(publicPath));

app.listen (3000, () => {
    console.log ('funka 3000');
});

app.get ('/', function(req,res) {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});