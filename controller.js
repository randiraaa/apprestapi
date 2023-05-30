"use strict";

const response = require("./res");
const connection = require("./koneksi");

exports.index = (req, res) => {
  response.ok("Aplikasi REST API berjalan!");
};
