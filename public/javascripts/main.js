/* Set up socket io connection, so we can talk to the server */

(function(doc){

    var socket = io.connect('http://localhost:3000');

    socket.on('activity', function(data) {
        console.log(data);
        doc.getElementById('activityBox').innerText = data.message + "\n" + "Socket Id: " + data.id;
    });

})(document);
