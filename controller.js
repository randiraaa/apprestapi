"use strict";

const response = require("./res");
const connection = require("./koneksi");

exports.index = (req, res) => {
  response.ok("Aplikasi REST API berjalan!", res);
};

// Menampilkan Data
exports.displayData = (req, res) => {
  connection.query("SELECT * FROM mahasiswa", (error, rows, fields) => {
    if (error) {
      connection.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan Data Berdasarkan ID
exports.displayDataId = (req, res) => {
  let id = req.params.id;
  connection.query("SELECT * FROM mahasiswa WHERE id_mahasiswa = ?", [id], (error, rows, fields) => {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan Data Mahasiswa
exports.addData = (req, res) => {
  let nim = req.body.nim;
  let nama = req.body.nama;
  let jurusan = req.body.jurusan;

  connection.query("INSERT INTO mahasiswa (nim, nama, jurusan) VALUES (?, ?, ?)", [nim, nama, jurusan], (error, rows, fields) => {
    if (error) {
      console.log(error);
    } else {
      response.ok("Add Data Berhasil!", res);
    }
  });
};

// Mengubah Data Berdasarkan ID Mahasiswa
exports.updateData = (req, res) => {
  let id = req.params.id;
  let nim = req.body.nim;
  let nama = req.body.nama;
  let jurusan = req.body.jurusan;

  connection.query("UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?", [nim, nama, jurusan, id], (error, rows, fields) => {
    if (error) {
      console.log(error);
    } else {
      response.ok("Update Data Berhasil!", res);
    }
  });
};

// Menghapus Data Berdasarkan ID Mahasiswa
exports.deleteData = (req, res) => {
  let id = req.params.id;

  connection.query("DELETE FROM mahasiswa WHERE id_mahasiswa = ?", [id], (error, rows, fields) => {
    if (error) {
      console.log(error);
    } else {
      response.ok("Data Berhasil Dihapus!", res);
    }
  });
};

// Menampilkan Group matakuliah
exports.displayGroupMataKuliah = (req, res) => {
  connection.query(
    "SELECT mahasiswa.id_mahasiswa, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks FROM krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa ORDER BY mahasiswa.id_mahasiswa;",
    (error, rows, fields) => {
      if (error) {
        console.log(error);
      } else {
        response.okNested(rows, res);
      }
    }
  );
};
