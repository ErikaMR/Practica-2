// Importa las funciones 
const Music = require('../models/music');

exports.index = function(req, res){

    res.format({
        json: function(){
        res.send(Music.findALL());
        },
    html: function(){
        res.render('index', {songs: Music.findALL})
    }
    });
    
}

exports.show = function(req, res){
    
    res.send(Music.find(req.params.id));
}

exports.update = function(req, res){
    // Voy a actualizar los campos
    res.send(Music.update(req.params.id, req.body));
    
}

exports.create = function(req, res){
    // Voy a crear una CANCION
    res.send(Music.create(req.body));
    
}

exports.destroy = function(req, res){
    // Eliminar una CANCION en especifico
    res.send(Music.destroy(req.params.id));
    
}