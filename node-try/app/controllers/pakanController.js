'use strict';

var Pakan = require('../models/pakan'),
    db = require('../services/database'),
    config = require('../config');

// The user controller.
var PakanController = {};

//create hewan
PakanController.createPakan = function(req, res) {

    db.sync().then(function() {
        var newPakan = {
            nama_pakan: req.body.nama_pakan,
            jenis_pakan: req.body.jenis_pakan,
            jumlah_pakan: req.body.jumlah_pakan,

        };

        return Pakan.create(newPakan).then(function() {
            res.status(201).json({ message: 'data berhasil ditambahkan!' });
        });
    }).catch(function(error) {
      console.log(error)
        res.status(403).json({ message: 'data gagal ditambahkan' });
    });

}

//delete pakan
PakanController.deletePakan = function(req, res) {

    db.sync().then(function() {
        Pakan.destroy({
          where: {
            id: req.body.id
          }
          });
          return  res.status(201).json({ message: 'data berhasil dihapus!' });

    }).catch(function(error) {
      console.log(error)
        res.status(403).json({ message: 'data gagal dihapus' });
    });

}

//update pakan
PakanController.updatePakan = function(req, res) {

    db.sync().then(function() {
      Pakan.update({
        nama_pakan: req.body.nama_pakan,
        jenis_pakan: req.body.jenis_pakan,
        jumlah_pakan: req.body.jumlah_pakan,
          }, {
            where: {
              id:req.body.id
            }
          });
          return  res.status(201).json({ message: 'data berhasil diubah!' });

    }).catch(function(error) {
      console.log(error)
        res.status(403).json({ message: 'data gagal diubah' });
    });

}

module.exports = PakanController;
