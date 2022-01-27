const express = require('express');

const path = require('path');

require('dotenv').config();


const app = express();
const http = require('http').Server(app);
const cors = require('cors')


const io = require('socket.io')(http)



const router = require('./router/router');
const Message = require('./modals/schema');

//middleware...
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.use('https://basic-chat-app001.herokuapp.com/', router)



//post...


app.post('https://basic-chat-app001.herokuapp.com/messages', (req, res) => {
    const message = new Message(req.body);
    message.save((err) => {
        if (err) return sendStatus(500);

        io.emit('message', req.body)
        res.sendStatus(200);
    });

});





io.on('connection', (socket) => {
    console.log('a user connected');
})



http.listen(process.env.PORT || 3000, () => {
    console.log(`server is running on port:${process.env.PORT}`);
});

module.exports = io;