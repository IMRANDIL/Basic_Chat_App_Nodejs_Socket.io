const router = require('express').Router();

const { sendStatus } = require('express/lib/response');
const db = require('../db/connection');


const Message = require('../modals/schema');






//get....


router.get('/messages', (req, res) => {
    Message.find({}, (err, messages) => {
        if (err) return sendStatus(404)
        res.send(messages)
    })

})







module.exports = router;
