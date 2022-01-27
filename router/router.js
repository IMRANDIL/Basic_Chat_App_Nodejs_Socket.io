const router = require('express').Router();



//get....
let messages = [
    { name: "Ali", message: "Hey Ali" },
    { name: "Adil", message: "Hey Adil" }
]

router.get('/messages', (req, res) => {
    res.send(messages)
})


//post...

router.post('/messages', (req, res) => {

    messages.push(req.body)
    res.sendStatus(200);
});





module.exports = router;