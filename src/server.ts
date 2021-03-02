import express from 'express'
import mongoose from 'mongoose'
const cors = require('cors')
const statsRouter = require('./routes/statistic')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri: any = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true,useFindAndModify: false})
const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
})

app.use('/statistic', statsRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})