const express = require('express')
const pino = require('pino')
const pretty = require('pino-pretty')
const pinoHttp = require('pino-http')
const { helloFor } = require('./services/hello-service')

const app = express()
const logger = pino(pretty())
const port = 3000

app.use(express.json())
app.use(pinoHttp({ logger: logger }))

app.get('/', (req, res) => {
    res.status(200)
        .json({ result: 'Hello World!' })
})

app.post('/hello', async (req, res) => {
    res.status(200)
        .json({
            name: req.body.name,
            result: await helloFor(req.body.name)
        })
})

app.listen(port, () => {
    logger.info(`API HTTP rodando na porta ${port}`)
})