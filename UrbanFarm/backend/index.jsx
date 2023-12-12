const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const req = require('express/lib/request')
const res = require('express/lib/response')
const db = require('./connection')
const response = require('./response')

// Endpoint untuk menyediakan data farm
app.use(bodyParser.json())

app.get("/", (req,res) => {
  response(200, "API v1 ready to go", "SUCCESS", res)
})

app.get("/artikel", (req,res) => {
  const sql = "SELECT * FROM artikel_card"
  db.query(sql, (err, fields) => {
    if (err) throw err
    console.log(fields)
    response(200, fields, "ini pesan", res)
  })
})

app.get("/artikel/:kode", (req,res) => {
  const kode = req.params.kode
  const sql = `SELECT * FROM artikel_card WHERE kode = ${kode}`
  db.query(sql, (err, fields) => {
    console.log(fields)
    if (err) throw err
    response(200, fields, "Get Detail Artikel", res)
  })
})

app.post("/artikel/post", (req,res) => {
  const {  kode, judul, gambar, sumber, tanggal } = req.body

  const sql = `INSERT INTO artikel_card ( kode, judul, url_gambar, url_sumber, tanggal_publikasi) VALUES
  ( ${kode}, '${judul}', '${gambar}', '${sumber}', '${tanggal}')`

  db.query(sql, (err,fields) => {
    if (err) response(500, "invalid", "error", res)
    if (fields?.affectedRows) {
      const data = {
        isSuccess: fields.affectedRows,
        id: fields.insertId,
      }
      response(200, data, "Data Added Successfuly", res)
    }
  })
})

app.put("/artikel/put", (req,res) => {
  const {kode, judul, gambar, sumber, tanggal} = req.body
  const sql = `UPDATE artikel_card SET judul = '${judul}', url_gambar = '${gambar}', 
  url_sumber = '${sumber}', tanggal_publikasi = '${tanggal}' WHERE kode = ${kode}`

  db.query(sql, (err, fields) => {
    if (err) response(500, "invalid", "error", res)
    if (fields?.affectedRows) {
      const data = {
        isSuccess: fields.affectedRows,
        message: fields.message,
      }
      response(200, data, "Edit data succesfuly", res)
    } else {
      response(500, "mohon maaf", "error", res)
    }
  })
})

app.delete("/artikel/delete", (req,res) => {
  const {kode} = req.body
  const sql = `DELETE FROM artikel_card WHERE kode = ${kode}`

  db.query(sql, (err, fields) => {
    if (err) response(500, "invalid", "error", res)
    if (fields?.affectedRows) {
      const data = {
      isDeleted: fields.affectedRows,
    }
    response(200, data, "Deleted data successfuly", res)
  } else {
    response(500, "mohon maaf", "error", res)
  }
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
