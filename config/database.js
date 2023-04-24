const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
// set up a special listener to listen for "connected" to mongoDB event
//set up a shortcut variable to the connection object
const db = mongoose.connection;
//register a listener for connected events
db.on('connected', function() {
    console.log(`Connected to Mongo DB ${db.name} on ${db.host} port: ${db.port}`)
});