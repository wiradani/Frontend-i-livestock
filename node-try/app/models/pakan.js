
'use strict';

var Sequelize = require('sequelize'),
    bcrypt = require('bcrypt');

var config = require('../config'),
    db = require('../services/database');

// 1: The model schema.
var modelDefinition = {
    nama_pakan: {
        type: Sequelize.STRING,
        allowNull: false
    },

    jenis_pakan: {
        type: Sequelize.STRING,
    },

    jumlah_pakan: {
        type: Sequelize.INTEGER,
    }

};

// 3: Define the User model.
var PakanModel = db.define('pakan', modelDefinition );


module.exports = PakanModel;
