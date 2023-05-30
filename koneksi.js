const msql = require("mysql");

// Membuat koneksi ke Database
const conn = msql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbrestapi",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Database connected!");
});

module.exports = conn;
