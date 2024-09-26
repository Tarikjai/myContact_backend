const express = require('express')
require('dotenv').config();

 

const app = express()

const PORT = process.env.PORT


//app.use() enregistre le middleware pour gérer les requêtes vers /api/contacts,
// et les route vers le fichier contactRoutes.
app.use('/api/contacts', require("./routes/contactRoutes"))

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})