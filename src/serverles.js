const express = require('express')
const app = express()

const port = process.env.port || 7000

app.listen(port, ()=>{
     console.log("Listening port", port );
})

app.use('/', (req, res) =>{
    res.send("Hola mundo")
})