/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ABM' });
});

module.exports = router;