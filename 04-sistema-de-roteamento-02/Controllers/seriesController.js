const series = require("../models/series.js")
const path = require("path")

const controller = {
  index: (req, res) => res.send(series),
  porGenero: (req, res) => res.send(series.filter(serie => serie.genero.toLowerCase() === req.params.genero.toLowerCase())),
  criar: (req, res) => res.sendFile(path.join(__dirname,"..", "views", "criar-serie.html"))
}

module.exports = controller