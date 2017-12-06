
'use strict';

var Sequelize = require('sequelize'),
    bcrypt = require('bcrypt');

var config = require('../config'),
    db = require('../services/database');

// 1: The model schema.
var modelDefinition = {
    jenis_hewan: {
        type: Sequelize.STRING,
        allowNull: false
    },

    deskripsi_hewan: {
        type: Sequelize.STRING,
    },

    spesies_hewan: {
        type: Sequelize.STRING,
    },

    usia: {
        type: Sequelize.INTEGER
    },

    berat_badan:{
        type: Sequelize.FLOAT
    },

    status_hewan:{
        type: Sequelize.STRING
    },

    kandang:{
        type: Sequelize.STRING
    }

};

// 3: Define the User model.
var HewanModel = db.define('hewan', modelDefinition );


module.exports = HewanModel;
