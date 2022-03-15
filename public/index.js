window.onload = function () {
    var socket = new WebSocket('ws://localhost:8080');
    var TFK;
    var red = document.getElementById('Red')
    red.addEventListener("click", function (data) {
        var TFK = "#FF0000"
        data = TFK;
        socket.send(data);
    })

    var orange = document.getElementById('Orange')
    orange.addEventListener("click", function (data) {
        var TFK = "#FFA500"
        data = TFK;
        socket.send(data);
    })

    var yellow = document.getElementById('Yellow')
    yellow.addEventListener("click", function (data) {
        var TFK = "#FFFF00"
        data = TFK;
        socket.send(data);
    })

    var green = document.getElementById('Green')
    green.addEventListener("click", function (data) {
        var TFK = "#00FF00"
        data = TFK;
        socket.send(data);
    })

    var blue = document.getElementById('Blue')
    blue.addEventListener("click", function (data) {
        var TFK = "#0000FF"
        data = TFK;
        socket.send(data);
    })
    var purple = document.getElementById('Purple')
    purple.addEventListener("click", function (data) {
        var TFK = "#6A0DAD"
        data = TFK;
        socket.send(data);
    })
    var off = document.getElementById('Off')
    off.addEventListener("click", function (data) {
        var TFK = "#000000"
        data = TFK;
        socket.send(data);
    })
}