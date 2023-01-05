const http = require("http"); // how we import files in
const routes = require("./routes");

const server = http.createServer(routes);

server.listen(3200); // server should stay up and running

// note the core modules that node ships with:
// fs
// https
// fs
// path
// os

// buffer is a construct that holds chunks and allows us to work with them before they are done
// thread --> process in operating system
// working with files -- often a task that takes longer
