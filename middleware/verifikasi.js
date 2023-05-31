const jwt = require("jsonwebtoken");
const config = require("../config/secret");

function verifikasi(roles) {
  return (req, res, next) => {
    // Mengecek authorization header
    let tokenWithBearer = req.headers.authorization;
    if (tokenWithBearer) {
      let token = tokenWithBearer.split(" ")[1];
      // Verifikasi
      jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
          return res.status(401).send({ auth: false, message: "Token tidak terdaftar!" });
        } else {
          if (decoded.rows[0].role === roles) {
            req.auth = decoded;
            next();
          } else {
            return res.status(401).send({ auth: false, message: "Anda tidak memiliki akses token ke halaman ini!" });
          }
        }
      });
    } else {
      return res.status(401).send({ auth: false, message: "Tidak ada token!" });
    }
  };
}

module.exports = verifikasi;
