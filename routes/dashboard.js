const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const Notification = require('../schemas/NotificationModel');
const User = require('../schemas/UserModel');

router.get('/', (req, res) => {

    res.redirect('/dashboard/notifications');
});

router.get('/college-notifications', (req, res) => {

    res.redirect('/dashboard/notifications');
});

router.get('/notifications', (req, res) => {

    Notification.find({level:'college'}, (err, notifications) => {
        //console.log(users);
        res.render('college-notifications', {
            user : req.user,
            notificationList: notifications  
        });
    });

});



router.get('/department-notifications', (req,res) => {

    Notification.find({level:'department'}, (err, notifications) => {
        //console.log(users);
        res.render('department-notifications', {
            user : req.user,
            notificationList: notifications  
        });
    });
});

router.get('/user-details', (req, res) => {

    const email = req.user.email;
    User.findOne({email: email}, (err, user) => {
        //console.log(user);
        res.render('user-details', {
            user: user
        }); 
    })
    
});

router.get('/test', (req, res) => {
    res.send('Test');
})


router.get('/hello', (req, res) => {

    res.send('Hello');
})

module.exports = router;