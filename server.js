const express = require('express');
const path = require('path');
const fs = require('fs');
const api = require('./routes/api')


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', api);

// Delete request | Api routes 



//HTML ROUTES
app.get('/notes',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/notes.html'));
});
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/index.html'));
});
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/index.html'));
});

//LISTENING
app.listen(PORT,()=>{
    console.log(`App listening at http://localhost:${PORT} 🚀`);
})