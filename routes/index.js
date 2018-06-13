var express = require('express');
var router = express.Router();


// Get Homepage /

router.get('/value', function(req, res) {

	var d = new Date();
var n = d.getSeconds();
console.log('hours ', n)
	res.json(n);
});

module.exports = router;