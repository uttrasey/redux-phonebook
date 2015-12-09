import path from 'path';
import Express from 'express';
import request from 'request';

var app = Express();
var server;

const PATH_STYLES = path.resolve(__dirname, '../client/styles');
const PATH_DIST = path.resolve(__dirname, '../../dist');

app.use('/styles', Express.static(PATH_STYLES));
app.use(Express.static(PATH_DIST));

// proxy to the API data avoiding CORS
app.get('/api', (req, res) => {
  //modify the url in any way you want
  var newurl = 'http://api.namegame.willowtreemobile.com/';
  request(newurl).pipe(res);
});

// serve the root application
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

server = app.listen(process.env.PORT || 3000, () => {
  var port = server.address().port;
  console.log('Server is listening at %s', port);
});
