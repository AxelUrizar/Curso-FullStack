const express = require('express')
const app = express()

const PORT = 3000;
app.listen(PORT, () => console.log(`App escuchando al puerto: ${PORT}`))

app.get('/', (req, res, next) => {
    res.status(200).send('Hello World')
})