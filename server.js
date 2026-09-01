const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://ethan_2408:N0rth-r3m3mb3r@cluster0.dorhfsw.mongodb.net/";

mongodb.connect(connectionString, {
    useNewUrlParser: true, useUnifiedTopology: true
}, (err, client) => {
    if (err) console.log("Error on connection MongoDB");
    else{
        console.log("MongoDB connection succeed");
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function() {
            console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
});
    }
});

