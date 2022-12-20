const {Schema, model} = require('../connection');

// defining the structure of Model
const myschema = new Schema({
    title : String,
    genre : String,
    artist : String,
    lyrics : String,
    publisher : String,
    image: String,
    file: String,
    createdAt : Date,
})

// defining the name of model
module.exports = model('musics', myschema);