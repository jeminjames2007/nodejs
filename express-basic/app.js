const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

app.use((req, res, next) => {
console.log('jemin');
res.send('jemin');
});


server.listen(3004);