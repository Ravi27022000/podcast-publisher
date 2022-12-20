const mongoose = require('mongoose');

const dbName = "wss2000";
const url = `mongodb+srv://panshuman098:Satyam123@cluster0.qlch9jg.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// Asynchronous Fuction - returns promise
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);    
});

module.exports = mongoose;