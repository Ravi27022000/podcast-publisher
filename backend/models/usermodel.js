const {Schema, model} = require('../connection');

// defining the structure of Model
const myschema = new Schema({
    name : String,
    email : String,
    password : String,
    age : Number
})

// defining the name of model
module.exports = model('users', myschema);