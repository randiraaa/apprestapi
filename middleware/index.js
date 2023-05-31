const express = require("express");
const auth = require("./auth");
const verifikasi = require("./verifikasi");
const router = express.Router();

// Mendaftarkan url registrasi
router.post("/api/v1/register", auth.registrasi);

// Mendaftarkan url login
router.post("/api/v1/login", auth.login);

// Alamat yang perlu otorisasi
router.get("/api/v1/rahasia", verifikasi(2), auth.halamanRahasia);

module.exports = router;
