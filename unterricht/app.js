// http modul, mit dem sich eigene server oder clients schreiben lassen

const http = require("http");
const server = http.createServer((request, response) => {
  response.setHeader("header", "text/html");

  if (request.url === "/") {
    response.write("<html><body><h1>Ich bin ein Server!</h1></body></html>");
  } else if (request.url === "/contact") {
    response.write("<html><body><h1>Kontakt Formular</h1></body></html>");
  } else if (request.url === "/myApi") {
    response.setHeader("content", "application/json");
    response.write('{"completed":"false","title":"sleep"}');
  } else {
    response.write("<html><body><h1>Seite nicht gefunden!</h1></body></html>");
  }
  response.end();
});

server.listen(3000, () => {
  console.log("server listening on port 3000");
});
