require('dotenv').config()
const express = require('express')
const app = express()
const Port = process.env.PORT

app.get('/', (req,res)=>{
    res.send('hello world')
})

app.listen(Port,()=>{
    console.log(`App listening on ${Port}`)
})