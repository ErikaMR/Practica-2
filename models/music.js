// Exportar las funciones del movie controller
const SONGS = [
    {
    
        id: 1,
        title: 'Como te atreves',
        year: 2016,
        artista: 'Morat'
    
    }
   
]; // MySQL, Mongo, Firebase

// Query our datastore and get all the resources (Regresa todos los elementos de nuestro tipo de recurso SONGS de donde estamos almacenando todas las SONGS)
exports.findALL = function(){
    return SONGS;
}

// Query our datastore for an specific resource (Recibir un identificador y buscar dentro de la base de datos el que incidida con el identificador)
exports.find = function(id){
    return SONGS.filter((music)=> music.id == id) [0]  // FILTER regresa un arreglo... [0] regresa el primer elemento
}

// Update an specific element of our datastore // Se hace sobre un objeto que ya existe
exports.update= function(id, attributes){
    let obj = SONGS.filter((music) => music.id == id) [0];
    
    if(obj){
    obj.title = attributes.title;
    obj.year = attributes.year;
    obj.artista= attributes.artista;
    }
}

// Create a new resource in our datastore // crear un nuevo elemento
exports.create = function(attributes){
    let obj = {}; //Empieza vacio porque es una nueva  
    obj.id = SONGS.slice(-1) [0].id + 1   // Obtener el ultimo elemento de un arreglo 

    obj.title = attributes.title;
    obj.year = attributes.year;
    obj.artista= attributes.artista;

    SONGS.push(obj)
}

// Remove an specific element from our datastore, Buscar el elemento requerido y al haberlo encontrado lo sacamos del arreglo 
exports.destroy = function(id){
    let music = MOVES.filter((music) => music.id == id) [0];
    if (music){
        SONGS.splice(SONGS.indexOf(music), 1);
        return true
    }
    return false
}