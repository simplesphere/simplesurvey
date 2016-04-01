var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home' });
});
/* GET people page. */
router.get('/people', function (req, res, next) {
    res.render('people', { title: 'People' });
});
/* GET contact page. */
router.get('/contact', function (req, res, next) {
    res.render('contact', { title: 'Contact' });
});
module.exports = router;

//# sourceMappingURL=index.js.map
