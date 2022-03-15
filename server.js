const express = require('express');
const { status } = require('express/lib/response');
const app = express();
const port = 3000;
var five = require('johnny-five');
var board = new five.Board();
var led;

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

app.listen(port, () => { console.log("We are live") })
app.use('/color', express.static('public'));


board.on('ready', function () {
 
    var led = new five.Led.RGB({
        pins: {
            red: 11,
            green: 10,
            blue: 9
        },
        isAnode: true
    });


    wss.on('connection', function (ws, req) {
        console.log('connected');
        ws.on('message', function (data) {
            led.color(data.toString('utf8'));
        })

    });
})

