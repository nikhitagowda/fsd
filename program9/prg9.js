var http = require('http')
var url = require('url')
var fs = require('fs')

http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
      res.writeHead(200, { 'context-type': 'text-html' })
      fs.readFile('./index.html', 'UTF-8', (err, data) => {
        if(err) throw err;
        res.write(data);
        res.end();
      })
    } else if (req.method === 'GET') {
      var qd = url.parse(req.url, true).query
      res.write('First Name :' + qd.fname)
      res.write('Last Name :' + qd.lname)
      res.end()
    }
  }).listen(9000)