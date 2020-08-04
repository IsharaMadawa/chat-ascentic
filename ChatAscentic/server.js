//Install express server
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/ChatAscentic'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/ChatAscentic/index.html'));
});

app.listen(process.env.PORT || 8080);