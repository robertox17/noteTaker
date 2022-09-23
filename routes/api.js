const api =require('express').Router();
const { readAndAppend, readFromFile} = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');
const notes = require('../db/db.json')



api.get('/notes', (req,res) =>{
readFromFile('db/db.json').then((data)=> res.json(JSON.parse(data)));
    // res.json(notes);
});
 

api.post('/notes', (req,res) =>{
    const { title,text } = req.body;

    if(req.body){
        const newNote ={
            title,
            text,
            id:uuid()
        };

        readAndAppend(newNote, 'db/db.json');
        res.json(`Note added successfully `);
    } else{
        res.error('Error in adding note');

    }

});


module.exports = api;


