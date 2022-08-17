const express = require('express');
const data = express.Router();

data.get('/', (req, res) => {
    res.json({
        Nama: "Richard Muhammad",
        TanggalLahir: "14 Januari 1994",
        JenisKelamin: "Laki- Laki",
        Hobi: "Membaca Buku"
    });
})

data.post('/', (req, res) => {
    res.json({
        status: "API Its Working",
    })
})

data.post('/', (req, res) => {
    res.json({
        status: "API Its Working",
    })
})

data.post('/', (req, res) => {
    res.json({
        status: "API Its Working",
    })
})

module.exports = data;