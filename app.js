const http = require("http"); // how we import files in nodejs

const server = http.createServer((req, res) => {
  console.log("running on port 3000");
});

server.listen(3000);

// note the core modules that node ships with:
// fs
// https
// fs
// path
// os
