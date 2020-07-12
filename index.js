const express = require("express");
const app = express();
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://shoyeb:abc1234@react-blog.lcmtn.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>console.log("Database is connected"))
.catch(err=>console.log(err));

app.get('/home', (req, res)=>{
    res.send('Hello World')
})

app.listen(5000)