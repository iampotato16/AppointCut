const express = require('express')
const https = require('https')

const app = express()

//refer to resource folder locally 
app.use(express.static('public'))
//get data from form 
app.use(express.urlencoded({extended: true}))

app.get('/', function(req,res){
    res.sendFile(__dirname + '/login.html')
})

// app.post(3000, '25.31.13.87', (req, res) => {
//     res.sendFile(__dirname + '/login.html')
// })

app.listen(3000, function(req, res){
    console.log('Server is running on port 3000')
})

