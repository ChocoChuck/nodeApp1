var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended: false})
module.exports = function(app){

  app.get('/', function(request, response){
    response.render('index', {qs: request.query});
  });

  // app.get('/contact', function(request, response){
  //   response.render('index', {qs: request.query});
  // });rs


  app.post('/contact', urlEncodedParser, function(request, response){
    console.log(request.body);
    response.render('contact-success', {data: request.body});
  });
}
