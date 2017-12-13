'use strict';

var Pakan = require('../models/pakan'),
    db = require('../services/database'),
    config = require('../config');

// The user controller.
var PakanController = {};

//create pakan
PakanController.createPakan = function(req, res) {

    db.sync().then(function() {
        var newPakan = {
            jenis_pakan: req.body.jenis_pakan,
            nama_pakan: req.body.nama_pakan,
            jumlah_pakan: req.body.jumlah_pakan,
            kandungan: req.body.kandungan

        };

        return Pakan.create(newPakan).then(function() {
          res.json({ success: true});
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
            jenis_pakan: req.body.jenis_pakan,
            nama_pakan: req.body.nama_pakan,
            jumlah_pakan: req.body.jumlah_pakan,
            kandungan: req.body.kandungan
          }, {
            where: {
              id:req.body.id
            }
          });
          return  res.status(201).json({ message: 'data berhasil diubah!' }) ;

    }).catch(function(error) {
      console.log(error)
        res.status(403).json({ message: 'data gagal diubah' });
    });

}

//get pakan
PakanController.listPakan =async function(req, res) {
      Pakan.findAndCountAll({
      })
      .then(function(listpakan){res.status(200).json(listpakan)})
      .catch(function(error){console.log(error);res.status(500).json({ message: 'There was an error!' })})
}

PakanController.listRumput =async function(req, res) {
      Pakan.findAndCountAll({
        where: {jenis_pakan: 'Rumput'}
      })
      .then(function(listrumput){res.status(200).json(listrumput)})
      .catch(function(error){console.log(error);res.status(500).json({ message: 'There was an error!' })})
}

PakanController.listKonsentrat =async function(req, res) {
      Pakan.findAndCountAll({
        where: {jenis_pakan: 'Konsentrat'}
      })
      .then(function(listkonsentrat){res.status(200).json(listkonsentrat)})
      .catch(function(error){console.log(error);res.status(500).json({ message: 'There was an error!' })})
}

PakanController.countRumput =async function(req, res) {
      Pakan.count({
        where: {jenis_pakan: 'Rumput'}
      })
      .then(function(countrumput){res.status(200).json(countrumput)})
      .catch(function(error){console.log(error);res.status(500).json({ message: 'There was an error!' })})
}

PakanController.countKonsentrat =async function(req, res) {
      Pakan.count({
        where: {jenis_pakan: 'Konsentrat'}
      })
      .then(function(countkonsentrat){res.status(200).json(countkonsentrat)})
      .catch(function(error){console.log(error);res.status(500).json({ message: 'There was an error!' })})
}





module.exports = PakanController;
