//asosiasi many to many




// The User model.
'use strict';

var Sequelize = require('sequelize'),
    bcrypt = require('bcrypt');

var config = require('../config'),
    db = require('../services/database');

var HewanModel = require('../models/hewan');
var PakanModel = require('../models/pakan');




// 1: The model schema.
var modelDefinition = {
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false
    },

    role: {
        type: Sequelize.INTEGER,
        defaultValue: config.userRoles.user
    },

    // email: {
    //     type: Sequelize.STRING
    // },
    //
    // name:{
    //     type: Sequelize.STRING
    // },
    //
    // phone:{
    //     type: Sequelize.INTEGER
    // }

};

// 2: The model options.
var modelOptions = {
    instanceMethods: {
        comparePasswords: comparePasswords
    },
    hooks: {
        beforeValidate: hashPassword
    }
};

// 3: Define the User model.
var UserModel = db.define('user', modelDefinition, modelOptions);

// Compares two passwords.
function comparePasswords(password, callback) {
    bcrypt.compare(password, this.password, function(error, isMatch) {
        if(error) {
            return callback(error);
        }

        return callback(null, isMatch);
    });
}

// Hashes the password for a user object.
function hashPassword(user) {
    if(user.changed('password')) {
        return bcrypt.hash(user.password, 10).then(function(password) {
            user.password = password;
        });
    }
}



//assosiaction
UserModel.belongsToMany(PakanModel, {
    through: 'mengelola_pakan',
    foreignKey: 'id_user'
});

PakanModel.belongsToMany(UserModel, {
    through: 'mengelola_pakan',
    foreignKey: 'id_pakan'
});

UserModel.belongsToMany(HewanModel, {
    through: 'mengelola_ternak',
    foreignKey: 'id_user'
});

HewanModel.belongsToMany(UserModel, {
    through: 'mengelola_ternak',
    foreignKey: 'id_hewan'
});



module.exports = UserModel;
