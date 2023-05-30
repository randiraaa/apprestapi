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

// Menampulkan Data Berdasarkan ID
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
