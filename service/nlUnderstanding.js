var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': 'e00ca9be-2dc7-4382-b519-c4a0cbcd7b85',   /*NLU Password here*/
  'password': 'EJ1NiAJf7jt0',   /*NLU Password here*/
  'version_date': '2017-02-27'
});

var app = module.exports.app = module.parent.exports.app;

app.post('/api/understanding',function(req,res,next){

	var parameters = req.body.parameters;
	natural_language_understanding.analyze(parameters, function(err, response) {
  		if (err)
    		console.log('error:', err);
  		else{
    		console.log(JSON.stringify(response, null, 2));
    		res.json(response);
  		}
	});
});