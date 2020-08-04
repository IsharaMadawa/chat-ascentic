const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/chat-ascentic'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/chat-ascentic/index.html'));
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`)