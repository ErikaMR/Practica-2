// Define all URL endopoints for the project
const bodyParser = require('body-parser');
const multer = require('multer');
const uploap = multer();
const jsonParser = bodyParser.json();
const urlencodeParser = bodyParser.urlencoded({extended: true});


const express = require('express');
const app = express();
app.use(jsonParser);
app.use(urlencodeParser);


const songsController = require('./controllers/songs_controller');

// ULR para hacer una LISTA ---> 
                                    // Estas URL se acceden por peticiones GET/cancion/

app.get('/songs', songsController.index);
// URL para mostrar (show) ---> details for one of my resources
                                    // pasarle un GET/cancion/IDENTIFICADOR O ID 
app.get('/songs/:id', songsController.show);
// URL para actualizar (update) --->
                                   // POST|PUT|PATCH /cancion/IDENTIFICADOR
app.post('/songs/:id', songsController.update);
app.put('/songs/:id', songsController.update);
app.patch('/songs/:id', songsController.update);

// URL para crear (create) ---->
                                    // POST/cancion
app.post('/songs/', songsController.create);
// URL para borrar (DELETE) --->
                                   // DELETE/cancion/IDENTIFICADOR
app.delete('/songs/:id', songsController.destroy);

exports.app = app;