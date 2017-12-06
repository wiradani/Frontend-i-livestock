'use strict';

var Hewan = require('../models/hewan'),
    db = require('../services/database'),
    config = require('../config');

// The user controller.
var HewanController = {};

//create hewab
HewanController.createHewan = function(req, res) {

    db.sync().then(function() {
        var newHewan = {
            jenis_hewan: req.body.jenis_hewan,
            deskripsi_hewan: req.body.deskripsi_hewan,
            spesies_hewan: req.body.spesies_hewan,
            usia: req.body.usia,
            berat_badan: req.body.berat_badan,
            status_hewan: req.body.status_hewan,
        };

        return Hewan.create(newHewan).then(function() {
            res.status(201).json({ message: 'data berhasil ditambahkan!' });
        });
    }).catch(function(error) {
      console.log(error)
        res.status(403).json({ message: 'data gagal ditambahkan' });
    });

}
module.exports = HewanController;
