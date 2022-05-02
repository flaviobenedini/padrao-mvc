const express = require('express')
const router = require('./routes/scripts')
const app = express()
const port = 3000

app.use('/',router)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))