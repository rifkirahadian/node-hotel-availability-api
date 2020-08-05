import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(bodyParser.json())

// route list
require('./routes/index')(app, express)

const PORT = 8000

app.listen(PORT, () => {
  console.log('Server running on port ', PORT)
})
