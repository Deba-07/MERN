import express from 'express'

const app = express()

const port = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send("This is home page")
})

app.listen(port, () => {
    console.log(`data modeling app listening on http://localhost:${port}`)
})