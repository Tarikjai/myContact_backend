const express = require('express');
const errorHandler = require('./middleware/errorHanldler');
const { connect } = require('./routes/contactRoutes');
const connectDb = require('./config/dbConnection');
require('dotenv').config();
const app = express()
const PORT = process.env.PORT
 
connectDb()
app.use(express.json())

//app.use() enregistre le middleware pour gérer les requêtes vers /api/contacts,
// et les route vers le fichier contactRoutes.
app.use('/api/contacts', require("./routes/contactRoutes"))
app.use(errorHandler)

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})