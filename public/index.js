$(() => {
    $('#btn').click(() => {
        addmessages({ name: 'Ali', message: 'Hello from my Chat App.' })
    })

});



function addmessages(message) {
    $('#messages').append(`<h4> ${message.name} </h4> <p>${message.message}</p>`)
}