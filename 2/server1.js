const http = require("http");
const fs = require("fs");
const url = require("url");

// Create a server
http
  .createServer((request, response) => {
    // Read the requested file content from file system
    console.log(request.url);
    response.writeHead(200, { "Content-Type": "text/html" });

    // Send the response body
    response.end("<h1>Hello Node!!!!</h1>\n");
  })
  .listen(3001);

// Console will print the message
console.log("Server running at http://127.0.0.1:3001/");
