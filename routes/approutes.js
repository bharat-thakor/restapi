const express = require('express');
const router = express.Router();


router.get('/contatcs', function (req, res, next) {

		responseToReturn = { firstname: "Bharat",lastname:"Thakor"};
		res.send(responseToReturn);
		next();

});

router.get('/address', function (req, res, next) {

		responseToReturn = { address: "Ambawadi",city:"Ahmedabad"};
		res.send(responseToReturn);
		next();

});

module.exports = router;