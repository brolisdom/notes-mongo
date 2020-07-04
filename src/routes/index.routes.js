const {Router} = require('express');
const router = Router();

// controladores
const {renderIndex, renderAbout} = require('../controllers/index.controller');

router.get('/', renderIndex);

router.get('/about', renderAbout);

module.exports = router; 