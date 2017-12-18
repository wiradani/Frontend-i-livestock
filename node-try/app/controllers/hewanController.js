'use strict';

var Hewan = require('../models/hewan'),
    db = require('../services/database'),
    config = require('../config');

// The user controller.
var HewanController = {};

//create hewan
HewanController.createHewan = function(req, res) {

    db.sync().then(function() {
        var newHewan = {
            nomor_eartag: req.body.nomor_eartag,
            jenis_hewan: req.body.jenis_hewan,
            spesies_hewan: req.body.spesies_hewan,
            tanggal_lahir: req.body.tanggal_lahir,
            berat_badan: req.body.berat_badan,
            kesehatan_hewan: req.body.kesehatan_hewan,
            status_kurban: req.body.status_kurban,
            kandang: req.body.kandang,
            induk_jantan: req.body.induk_jantan,
            induk_betina: req.body.induk_betina
        };

        return Hewan.create(newHewan).then(function() {
          res.json({ success: true});
            res.status(201).json({ message: 'data berhasil ditambahkan!' });
        });
    }).catch(function(error) {
      console.log(error)
        res.status(403).json({ message: 'data gagal ditambahkan' });
    });

}

//delete hewan
HewanController.deleteHewan = function(req, res) {
  console.log(req.body)
    db.sync().then(function() {
        Hewan.destroy({
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

//update hewan
HewanController.updateHewan = function(req, res) {

    db.sync().then(function() {
      Hewan.update({
        	nomor_eartag: req.body.nomor_eartag,
            jenis_hewan: req.body.jenis_hewan,
            spesies_hewan: req.body.spesies_hewan,
            tanggal_lahir: req.body.tanggal_lahir,
            berat_badan: req.body.berat_badan,
            kesehatan_hewan: req.body.kesehatan_hewan,
            status_kurban: req.body.status_kurban,
            kandang: req.body.kandang,
            induk_jantan: req.body.induk_jantan,
            induk_betina: req.body.induk_betina
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

//get hewan
HewanController.listHewan =async function(req, res) {

            Hewan.findAndCountAll({
            })
            .then(function(listhewan){res.status(200).json(listhewan)})
            .catch(function(error){console.log(error);res.status(500).json({ message: 'There was an error!' })})
        }

HewanController.listSapi =async function(req, res) {

            Hewan.findAndCountAll({
            where: {jenis_hewan: 'Sapi'}
            })
            .then(function(listsapi){res.status(200).json(listsapi)})
            .catch(function(error){console.log(error);res.status(500).json({ message: 'There was an error!' })})
        }

HewanController.listKambing =async function(req, res) {

            Hewan.findAndCountAll({
            where: {jenis_hewan: 'Kambing'}
            })
            .then(function(listkambing){res.status(200).json(listkambing)})
            .catch(function(error){console.log(error);res.status(500).json({ message: 'There was an error!' })})
        }

HewanController.listDomba =async function(req, res) {

            Hewan.findAndCountAll({
              where: {jenis_hewan: 'Domba'}
            })
            .then(function(listdomba){res.status(200).json(listdomba)})
            .catch(function(error){console.log(error);res.status(500).json({ message: 'There was an error!' })})
        }

HewanController.countSapi =async function(req, res) {

            Hewan.count({
            where: {jenis_hewan: 'Sapi'}
            })
            .then(function(countsapi){res.status(200).json(countsapi)})
            .catch(function(error){console.log(error);res.status(500).json({ message: 'There was an error!' })})
        }

HewanController.countKambing =async function(req, res) {

            Hewan.count({
            where: {jenis_hewan: 'Kambing'}
            })
            .then(function(countkambing){res.status(200).json(countkambing)})
            .catch(function(error){console.log(error);res.status(500).json({ message: 'There was an error!' })})
        }

HewanController.countDomba =async function(req, res) {

            Hewan.count({
              where: {jenis_hewan: 'Domba'}
            })
            .then(function(countdomba){res.status(200).json(countdomba)})
            .catch(function(error){console.log(error);res.status(500).json({ message: 'There was an error!' })})
        }

module.exports = HewanController;
