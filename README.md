# Control-Arduino-RGB-With-Website

## Setup

### Packages

This project is dependent on the Express.js, WebSocket, and Johnny-Five javascript packages, which are already included in the the project.

### Wiring

This project uses a common anode RGB light. The correct wiring for this project requires pin 11 to be connected to the
Red leg, the 5V pin to be connected to the Anode, pin 10 to be connected to the Green leg, and pin 9 to be connected to the 
Blue leg.

### Initiating

Before activating the code with Node.js, please upload the Firmata to your board.
