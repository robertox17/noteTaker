const api =require('express').Router();
const { readAndAppend, readFromFile} = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');
const notes = require('../db/db.json')



api.get('/notes', (req,res) =>{
    res.json(notes);
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
        res.errored('Error in adding note');

    }

});


module.exports = api;


