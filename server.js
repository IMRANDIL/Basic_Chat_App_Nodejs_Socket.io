const express = require('express');

const path = require('path');

require('dotenv').config();


const app = express();
const http = require('http').Server(app);



const io = require('socket.io')(http)



const router = require('./router/router')
//middleware...

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.use('/', router)



//post...
let messages = [
    { name: "Ali", message: "Hey Ali" },
    { name: "Adil", message: "Hey Adil" }
]



app.post('/messages', (req, res) => {

    messages.push(req.body);
    io.emit('message', req.body)
    res.sendStatus(200);
});





io.on('connection', (socket) => {
    console.log('a user connected');
})



http.listen(process.env.PORT || 3000, () => {
    console.log(`server is running on port:${process.env.PORT}`);
});

module.exports = io;