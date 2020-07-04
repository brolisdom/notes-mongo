const {Router} = require('express')
const router = Router()

// controllers
const {renderSignupForm,
    signup,
    renderLoginForm,
    login,
    logout
    } = require('../controllers/users.controller');

// methods
router.get('/users/signup', renderSignupForm);
router.post('/users/signup', signup);
router.get('/users/login', renderLoginForm);
router.post('/users/login', login);
router.get('/users/logout', logout);

module.exports = router;