const express = require('express')
require('dotenv').config()
const app = express()

const PORT = process.env.PORT

app.get('/api/contacts', (req,res)=>{
    res.status(200).json({message :"Get all Contacts"})
})

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})