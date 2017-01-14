const express = require('express'); // requerimos express
const controllers = require('.././controllers');
let app = router = express.Router();

router.get('/', controllers.main.init)
router.post('/add', controllers.main.create)
router.get('/all', controllers.main.view)
module.exports = router;

