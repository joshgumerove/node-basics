const http = require("http"); // how we import files in nodejs
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req); // generated when we visit localhost:3200 for us by node
  console.log("running on port 3200");

  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>"); // allows us to write data to the
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text'/><button type='submit'>Submit</button></form></body>"
    );
    res.write("</htm>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "DUMMY TEXT");
    res.statusCode = 302;
    res.setHeader = ("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/htMl"); // tell the browser that we are rendering HTML code
  res.write("<html>"); // allows us to write data to the
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from Node Server</h1></body>");
  res.write("</htm>");
  res.end();
  // console.log("data: ", req.url, req.method, req.headers); logging ceratin request  (note that GET is the default if not specifid in header)
  // process.exit(); if we want to quit process
});

server.listen(3200); // server should stay up and running

// note the core modules that node ships with:
// fs
// https
// fs
// path
// os
