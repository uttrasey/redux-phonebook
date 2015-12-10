import path from 'path';
import express from 'express';
import bodyParser from 'body-parser'
import request from 'request';
import Store from 'jfs';

// simple in memory database
var db = new Store("data", { type:'memory'} );

// create some entries
db.saveSync({
    name: "Matt Uttridge",
    number: "111-1234-567"
});
db.saveSync({
    name: "John Doe",
    number: "222-4567-891"
});

// create application/json parser
var jsonParser = bodyParser.json()

var app = express();

var server;

const PATH_STYLES = path.resolve(__dirname, '../client/styles');
const PATH_DIST = path.resolve(__dirname, '../../dist');

app.use('/styles', express.static(PATH_STYLES));
app.use(express.static(PATH_DIST));

// get entries
app.get('/api/phonebook', (req, res) => {
    db.all(function(err, objs){
        let result = [];
        Object.keys(objs).forEach(key => {
            result.push({
                id: key,
                name: objs[key].name
            })
        });
        res.json(result);
    });
});

// get individual entry
app.get('/api/phonebook/:id', (req, res) => {
    var id = req.params.id;
    db.get(id, function(err, entry){
        if (entry) {
            res.json(entry);
        } else {
            res.status(404).send(id + ' not found');
        }
    });
});

// create entry
app.post('/api/phonebook', jsonParser, (req, res) => {
    db.save(req.body, function(err, id){
        if (id) {
            res.status(201).send('Created with id: ' + id);
        } else {
            res.status(500).send(err);
        }
    });
});

// edit an entry
app.put('/api/phonebook/:id', jsonParser, (req, res) => {
    var id = req.params.id;
    db.save(id, req.body, function(err) {
        if (err) {
            res.status(500).send('Could not update entry with id: ' + id);
        } else {
            res.status(200).send({});
        }
    });
});

// delete an entry
app.delete('/api/phonebook/:id', (req, res) => {
    var id = req.params.id;
    db.delete(id, function(err) {
        if (err) {
            res.status(500).send('Could not delete entry with id: ' + id);
        } else {
            res.status(200).send({});
        }
    });
});

// get individual entry
app.get('/api/cheat', (req, res) => {
    db.all(function(err, objs){
        res.json(objs);
    });
});

// serve the root application
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

server = app.listen(process.env.PORT || 3000, () => {
    var port = server.address().port;
    console.log('Server is listening at %s', port);
});
