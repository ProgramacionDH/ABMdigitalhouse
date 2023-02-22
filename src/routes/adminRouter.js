var express = require('express');
var router = express.Router();

router.get('/adminUser', function(req, res) {
  res.send('adminUser.ejs');
});

module.exports = router;