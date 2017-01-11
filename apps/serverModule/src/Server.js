const http = require("http");

class Server {
    static start(port) {
        const onResponse = (request, response) => {
            response.setHeader("Content-Type", "text/html; charset=utf-8");
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.end("Ahoj, zdraví tě server :)");
        };

        const server = http.createServer(onResponse);
        server.listen(port);

        console.log(`Server is running at http://127.0.0.1:${port}/`);
    }
}

module.exports = Server;
