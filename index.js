const express = require('express');
const app = express();
const dataSiswa = require('./DataSiswa.js');
const port = 8080;

app.get("/", (req, res) => {
    res.send("Selamat Datang Di Data Center Siswa Indonesia");
})

app.use("/DataSiswa", dataSiswa);

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
})