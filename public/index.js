$(() => {
    $('#btn').click(() => {
        addmessages({ name: 'Ali', message: 'Hello from my Chat App.' })
    });

    getMessages()

});



function addmessages(message) {
    $('#messages').append(`<h4> ${message.name} </h4> <p>${message.message}</p>`)
}


function getMessages() {
    $.get('http://localhost:5000/messages', (data) => {
        data.forEach(addmessages)
    })
}