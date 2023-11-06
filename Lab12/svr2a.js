let express = require('express');
let app = express();
//put the more specfifc rules at the top and more generic rules at the bottom 
app.get('/test', function(req, res){
    res.send('app.get for test was executed');
    console.log('app.get for test was executed');
})

app.all('*', function (request, response, next) {
    //response.send(request.method + ' to path ' + request.path);
    console.log(request.method + ' to path ' + request.path);
});
app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an anonymous function here to do a callback