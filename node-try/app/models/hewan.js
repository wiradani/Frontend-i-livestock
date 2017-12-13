


'use strict';

var Sequelize = require('sequelize'),
    bcrypt = require('bcrypt');

var config = require('../config'),
    db = require('../services/database');
var UserModel = require('../models/user');



// 1: The model schema.
var modelDefinition = {
    nomor_eartag: {
        type: Sequelize.STRING,
        allowNull: false
    },

    jenis_hewan: {
        type: Sequelize.STRING,
        allowNull: false
    },


    spesies_hewan: {
        type: Sequelize.STRING,
    },

    tanggal_lahir: {
        type: Sequelize.INTEGER
    },

    berat_badan:{
        type: Sequelize.FLOAT
    },

    kesehatan_hewan:{
        type: Sequelize.STRING
    },

    status_kurban:{
        type: Sequelize.STRING
    },

    kandang:{
        type: Sequelize.STRING
    },

    induk_jantan:{
        type: Sequelize.STRING
    },

    induk_betina:{
        type: Sequelize.STRING
    },

};

// 3: Define the User model.
var HewanModel = db.define('hewan', modelDefinition );



module.exports = HewanModel;
