const http = require ("http");
const fs = require ("fs");
const path = require ("path");
const dirPath=path.join(__dirname,"/templates")

const file2 =fs.readFileSync(`${dirPath}/page.html`);
const server =http.createServer((req,res) =>
{
    res.setHeader("Content-Type","text/html");
    res.end(file2);
});

server.listen(5000,() =>{
    console.log("Server working on port 5000")
});

