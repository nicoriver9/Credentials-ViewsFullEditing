const express = require('express');
const {isLoggedIn} = require('../lib/auth.js');
const router = express.Router();
const {    
    signin,
    credentials,
    renderRelatives,
    renderAddRelative,
    addRelatives,
    updateRelatives,
    renderAddMainUser,
    addMainUser,
    updateMainUsers,
    deleteMainUser,
    deleteRelatives
    } = require("../controllers/user-controllers")


router.get ("/",signin);

router.get ("/credentials",isLoggedIn ,credentials)

router.post ("/credentials/:isAdmin" ,credentials)

router.post('/addRelatives/:id',isLoggedIn, addRelatives );

router.get('/addRelative/:id', isLoggedIn, renderAddRelative );

router.get('/editRelatives/:id',isLoggedIn, renderRelatives );

router.post('/updateRelatives/:relativeid/:id', isLoggedIn, updateRelatives);

router.get('/renderAddMainUser',isLoggedIn, renderAddMainUser)

router.post('/addMainUser', isLoggedIn, addMainUser);

router.post('/updateMainUsers/:id',isLoggedIn, updateMainUsers);

router.get('/deleteMainUser/:id',isLoggedIn, deleteMainUser);

router.get('/deleteRelatives/:relativeid/:id',isLoggedIn, deleteRelatives);

module.exports = router;

