const http = require("http"); // how we import files in nodejs

const server = http.createServer((req, res) => {
  console.log(req); // generated when we visit localhost:3200 for us by node
  console.log("running on port 3200");
  // console.log("data: ", req.url, req.method, req.headers); logging ceratin request data
  // process.exit(); if we want to quit process
});

server.listen(3200); // server should stay up and running

// note the core modules that node ships with:
// fs
// https
// fs
// path
// os
