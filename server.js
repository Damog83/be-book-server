const http = require("http");
const {readFile} = require('fs/promises');
const { read } = require("fs");
const { file } = require("@babel/types");

const server = http.createServer((request, response) => {
    const {method, url} = request;
    if(url === "/api" && method === "GET"){
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.write(JSON.stringify({ msg: "Hello!" }));
    response.end();
    }

    if(url === "/api/books" && method === "GET"){
        readFile("./data/books.json", "utf-8")
        .then((fileContents) => {
            const books = JSON.parse(fileContents)  
            response.setHeader('Content-Type', 'application/json');
            response.statusCode = 200;
            response.write(JSON.stringify({ books }));
            response.end();
        })
        }
    
    if(url === "/api/authors" && method === "GET") {
        readFile("./data/authors.json", "utf-8")
        .then((fileContents) => {
            const authors = JSON.parse(fileContents)
            response.setHeader('Contentt-Type', 'application/json');
            response.statusCode = 200;
            response.write(JSON.stringify({authors}))
            response.end();
        })
    }

//need to find out how to use parametric endoints correctly :bookId


    if(url === "/api/books/:bookId" && method === "GET"){
        readFile("./data/books.json", "utf-8")
        .then((fileContents) => {
            const books = console.log(JSON.parse(fileContents))
            const book =   
            response.setHeader('Content-Type', 'application/json');
            response.statusCode = 200;
            response.write(JSON.stringify('in book'));
            response.end();
        })
        }
   
})


  server.listen(9090, (err) => {
      if(err) console.log(err);
      else console.log('Server is listening');
  })
