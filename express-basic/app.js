const http = require('http');
const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const server = http.createServer(app);

app.use(bodyparser.urlencoded({extended:false}))

app.use('/', (req, res, next) => {
    console.log('Home Page');
    next();
});

app.get('/user', (req, res, next) => {
    res.send('<form action="/create-user" method="post"><input type="text" name="product"><button name"Save" type"submit">Save</button></form>');
});

app.post('/create-user', (req, res, next) => {
    console.log(req.body.product);
    res.send('Create User');
});

app.put('/update-user', (req, res, next) => {
    console.log('Update User');
    res.send('Update User');
});

app.delete('/delete-user', (req, res, next) => {
    console.log('Delete User');
    res.send('Delete User');
});


server.listen(3004);