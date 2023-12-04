import express from 'express'
import connect from './config/connection.js'
import routes from './routes/index.js'

const connection = await connect()

connection.on('error', err => console.error("Error -> ", err))
connection.once('open', () => {
    console.log("Connection successful")
})

const app = express()
routes(app)

export default app
