// importing express
const express = require('express');
const userRouter = require('./routers/userRouter');
const musicRouter = require('./routers/musicrouter');
const utilRouter = require('./routers/util');
const cors = require('cors');

// initializing express
const app = express();

const port = 5000;

app.use( cors({ origin : [ 'http://localhost:3000' ] }) );
app.use(express.json());

// middleware
app.use( '/user', userRouter );
app.use( '/music', musicRouter );
app.use( '/util', utilRouter );

// route
app.get('/', (req, res) => {
    res.send('response from express');
});

app.use(express.static('./static/uploads'));


// starting the server
app.listen( port, () => { console.log('server started') });