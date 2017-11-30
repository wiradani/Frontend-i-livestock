
// livestock Respon 

exports.liatin = function(minta, kasihaja) {
	minta.getConnection(function(err,connect){

		var qry = connect.query('SELECT * FROM hewan_ternak',function(errn,rows) {

			if (err) {
				console.log('error nya : %s',err);
			};

			kasihaja.render('livestock',{page_title:"Data Hewan Ternak",data:rows});
		});
	})
}

exports.tambah = function(minta, kasihaja) {
	kasihaja.render('tambah_ternak',{page_title:"Tambah Hewan Ternak"});
}

exports.tambah_simpen = function(minta, kasihaja) {

	var tangkep = JSON.parse(JSON.stringify(minta.body));

	minta.getConnection(function (err, Conn) {
		var post = {

			jenis_hewan : tangkep.jenis,
			deskripsi_hewan : tangkep.deskripsi,
			spesies_hewan : tangkep.spesies,
			usia : tangkep.usia,
			berat_badan : tangkep.berat,
			status_hewan : tangkep.status,
			FK_Kandang_id_kandang : tangkep.kandang

		};

		var qry = Conn.query("insert into hewan_ternak set ? ",post,function (err,rows) {
			
			if (err) {
				console.log("Gagal Input Coeg ! :p Error Di : %s",err);
			};

			kasihaja.redirect('/livestock');
		})

	});
}

exports.ubah = function(minta, kasihaja) {
	var idnya = minta.params.id;
	minta.getConnection(function (err, Conn) {
		Conn.query("select * from hewan_ternak where hewan_id = ? ",idnya,function (err,rows) {
		if (err) {
				console.log('error nya : %s',err);
			};
			kasihaja.render('edit_ternak',{page_title:"Ubah Hewan Ternak",data:rows});
		}) 
	})


};



exports.ubah_simpen = function(minta, kasihaja) {

	var tangkep = JSON.parse(JSON.stringify(minta.body));
	var idnya = minta.params.id;

	minta.getConnection(function (err, Conn) {
		var post = {

			jenis_hewan : tangkep.jenis,
			deskripsi_hewan : tangkep.deskripsi,
			spesies_hewan : tangkep.spesies,
			usia : tangkep.usia,
			berat_badan : tangkep.berat,
			status_hewan : tangkep.status,
			FK_Kandang_id_kandang : tangkep.kandang

		};

		var qry = Conn.query("update hewan_ternak set ? where hewan_id = ?",[post,idnya],function (err,rows) {
			
			if (err) {
				console.log("Gagal Update Coeg ! :p Error Di : %s",err);
			};

			kasihaja.redirect('/livestock');
		})

	});
}

exports.hapus = function(minta, kasihaja){

		var idnya = minta.params.id;

		minta.getConnection(function (err, Conn) {
			
		var qry = Conn.query("delete from hewan_ternak where hewan_id = ?",idnya,function (err,rows) {
			if (err) {

				console.log("gagal delete coeg ! gara gara : %s",err);

			};
			kasihaja.redirect('/livestock');
		});
		})
}


// Terminator Corps
// Fadri