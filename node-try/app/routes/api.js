
'use strict';

var router = require('express').Router();

var config = require('../config'),
    allowOnly = require('../services/routesHelper').allowOnly,
    AuthController = require('../controllers/authController'),
    UserController = require('../controllers/userController'),
    AdminController = require('../controllers/adminController'),
    HewanController = require('../controllers/hewanController');
    PakanController = require('../controllers/pakanController');

var APIRoutes = function(passport) {
    // POST Routes.
    router.post('/signup', AuthController.signUp);
    router.post('/authenticate', AuthController.authenticateUser);
    router.post('/createHewan', HewanController.createHewan);
    router.post('/deleteHewan', HewanController.deleteHewan);
    router.post('/updateHewan', HewanController.updateHewan);
    router.post('/createPakan', HewanController.createPakan);
    router.post('/deletePakan', HewanController.deletePakan);
    router.post('/updatePakan', HewanController.updatePakan);

    // GET Routes.
    router.get('/profile', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, UserController.index));
    router.get('/admin', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, AdminController.index));

    return router;
};

module.exports = APIRoutes;
