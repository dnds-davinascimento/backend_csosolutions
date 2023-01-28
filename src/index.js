const express = require('express')
const cors = require("cors")
require('dotenv').config()
const app = express()

app. use(cors())
app.use(express.json())

const conn = require("./db/conn")

conn()
const routes = require("./routes/router")

app.use("/api", routes);
// npm start
app.listen(process.env.DB_PORT, function(){
    console.log("servidor online!!")
    
})
