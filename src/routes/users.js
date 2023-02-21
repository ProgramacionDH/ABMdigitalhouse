var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('responder con un recurso');
});

module.exports = router;
