const http = require("http"); // how we import files in nodejs
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>"); // allows us to write data to the
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html"); // tell the browser that we are rendering HTML code
  res.write("<html>"); // allows us to write data to the
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from Node Server</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3200); // server should stay up and running

// note the core modules that node ships with:
// fs
// https
// fs
// path
// os

// buffer is a construct that holds chunks and allows us to work with them before they are done
