const User = require('../models/User');
const usersCtrl = {};
const passport = require('passport');

usersCtrl.renderSignupForm = (req, res) => {
    res.render('users/signup');
}

usersCtrl.signup = async (req, res) => {
    const errors = []
    const {name, email, password, confirm} = req.body;
    if(password != confirm){
        errors.push({text: 'Password do not match'});
        res.render('users/signup',{
            errors,
            name,
            email,
            password,
            confirm
        });
    } else{
        const emailUser = await User.findOne({email: email});
        if(emailUser){
            errors.push({text: 'The email is already in use'});
            res.render('users/signup',{
                errors,
                name,
                email,
                password,
                confirm
            });
        } else{
            const newUser = new User({name, email, password});
            newUser.password = await newUser.encriptar(password);
            await newUser.save();
            req.flash('success', 'You are registered successfully');
            res.redirect('/');
        }
    }
}

usersCtrl.renderLoginForm = (req, res) => {
    res.render('users/login');
}

usersCtrl.login = passport.authenticate('local', {
    failureRedirect: '/users/login',
    successRedirect: '/',
    failureFlash: true
})

usersCtrl.logout = (req, res) => {
    req.logout();
    req.flash('success','You are logged out now');
    res.redirect('/users/login');
}

module.exports = usersCtrl;