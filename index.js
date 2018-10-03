var express = require("express");

var app = express();

// Configuration
app.set('port', process.env.PORT || 3000);

app.get("/", function(req, res, next){
    res.send("Express Works!");
});

app.get("/test", function(req, res, next){
    var message = "<h1>The server is running</h1><b>If you are building the server yourself:<b><br/> 1. Make sure to set the web address correctly within the Jave code (to communicate with the server). <br/> 2. Make sure that this is connected correctly to a database. (config.js) "
    res.send(message);
})

app.listen(app.get('port'), function(){
    console.log("Listening on port " + app.get('port'));
})