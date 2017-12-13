
'use strict';

var router = require('express').Router();

var config = require('../config'),
    allowOnly = require('../services/routesHelper').allowOnly,
    AuthController = require('../controllers/authController'),
    UserController = require('../controllers/userController'),
    AdminController = require('../controllers/adminController'),
    PakanController = require('../controllers/pakanController'),
    HewanController = require('../controllers/hewanController');

var APIRoutes = function(passport) {
    // POST Routes.
    router.post('/signup', AuthController.signUp);
    router.post('/authenticate', AuthController.authenticateUser);
    router.post('/createHewan', HewanController.createHewan);
    router.post('/deleteHewan', HewanController.deleteHewan);
    router.post('/updateHewan', HewanController.updateHewan);
    router.post('/createPakan', PakanController.createPakan);
    router.post('/deletePakan', PakanController.deletePakan);
    router.post('/updatePakan', PakanController.updatePakan);


    // GET Routes.
    router.get('/profile', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, UserController.index));
    router.get('/admin', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, AdminController.index));
    
    router.get('/hewan', HewanController.listHewan);
    router.get('/sapi', HewanController.listSapi);
    router.get('/kambing', HewanController.listKambing);
    router.get('/domba', HewanController.listDomba);
    
    router.get('/pakan', PakanController.listPakan);
    router.get('/rumput', PakanController.listKonsentrat);
    router.get('/konsentrat', PakanController.listRumput);
    return router;
};

module.exports = APIRoutes;
