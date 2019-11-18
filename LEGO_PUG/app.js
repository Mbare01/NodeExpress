
const express = require('express');
const lego = require('./views/lego.json')
const app = express();

app.set('view engine', 'pug');   
app.use(express.static(__dirname + '/public')); 

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Homepage',
        lego: lego.lego
    });
});
app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});
