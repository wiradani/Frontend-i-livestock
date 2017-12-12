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
          return  res.status(201).json({ message: 'data berhasil diubah!' });

    }).catch(function(error) {
      console.log(error)
        res.status(403).json({ message: 'data gagal diubah' });
    });

}

//get pakan
PakanController.listPakan =async function(req, res) {
    var token = await req.headers.authorization
    var accessStatus = await Access.checkAuthentication("pakan", "get", null, token)
    if (!accessStatus.status) {
        return res.status(500).json({status: false, message: "Internal Server Error (Access)"})
    }else{
        if (!accessStatus.auth) {
            return res.status(404).json({status: false, message: "No Project Found"})
        }else{
            Pakan.findAll({
                where:{project_id:{$in:accessStatus.projects_id}}
            })
            .then(function(listpakan){res.status(200).json(listpakan)})
            .catch(function(error){console.log(error);res.status(500).json({ message: 'There was an error!' })})
        }
    }
}



module.exports = PakanController;
