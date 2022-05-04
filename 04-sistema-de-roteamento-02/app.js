const express = require("express")
const app = express()
const seriesRouter = require("./routes/series")
const port = 3000

app.use('/series', seriesRouter)


app.listen (port, () => console.log(`Servidor rodando na porta ${port}`))