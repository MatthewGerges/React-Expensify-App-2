const path = require('path')
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
//use process.env.port if it exists, else use 3000

app.use(express.static(publicPath));
//express application that serves up all assets from that directory

app.get('*', (req, res) => {
    //request object contains info about request, response obj manipulates response to requesting server
    res.sendFile(path.join(publicPath, 'index.html'))
})

//manually listening to 3000 - doesn't work on heroku
//heroku provides env variable - dynamic
app.listen(port, () => {
    console.log('server is up')
});
//port, callback function that gets called when server is up

//basics of express
//express application uses public directory serves up static assets
//if request isnt in public server, give index.html
//start up on port 3000
//all this gives prod server
