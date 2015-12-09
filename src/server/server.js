import path from 'path';
import Express from 'express';
import request from 'request';

var app = Express();
var server;

const PATH_STYLES = path.resolve(__dirname, '../client/styles');
const PATH_DIST = path.resolve(__dirname, '../../dist');

var phonebook = [
        {
            id: 1,
            name: "john"
        },
        {
            id: 2,
            name: "mary"
        }
];

var phonebookEntries = {
    1: {
        name: "john",
        phone: 111
    },
    2: {
        name: "mary",
        phone: 222
    }
}

app.use('/styles', Express.static(PATH_STYLES));
app.use(Express.static(PATH_DIST));

// get entries
app.get('/api/phonebook', (req, res) => {
    res.json(phonebook);
});

// get individual entry
app.get('/api/phonebook/:id', (req, res) => {
    var id = req.params.id;
    if (phonebookEntries[id]) {
        res.json(phonebookEntries[id]);
    } else {
        res.status(404).send(id + ' not found');
    }
});

// serve the root application
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

server = app.listen(process.env.PORT || 3000, () => {
  var port = server.address().port;
  console.log('Server is listening at %s', port);
});
