
const socket = io();

$(() => {
    $('#btn').click(() => {
        let message = { name: $("#name").val(), message: $('#message').val() };
        postMessages(message)
    });

    getMessages()

});


socket.on('message', addmessages)



function addmessages(message) {
    $('#messages').append(`<h4> ${message.name} </h4> <p>${message.message}</p>`)
}


function getMessages() {
    $.get('http://localhost:5000/messages', (data) => {
        data.forEach(addmessages)
    })
}

function postMessages(message) {
    $.post('http://localhost:5000/messages', message)
}