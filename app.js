// aplicacion con webserve utilizando un paquete 
// propio de node que es http 

// llamado del paquete 
const http = require('http');

// para crear un servicio este metodo recibe dos parametros que son 
// el reques y la response 
http.createServer((req, res) => {
        // este metodo ricive 200 que es que el servicio se dio corrctamente
        // y el array me dice que tipo de contenido si es plain-text o json 
        res.writeHead(200, { 'Content-Type': 'aplication/json' });

        let salida = {
                nombre: 'Eric',
                apellido: 'Varilla',
                Profesion: 'Ingenieria de Sistemas',
                url: req.url
            }
            // como la salida es un json hay que castiarlo para que sea un json que reconosca
            // javascript con el metodo JSON.stringify
        res.write(JSON.stringify(salida));
        res.end();

        // res.write('Hola mundo'); // escribo la respuesta del servicio
        // res.end(); // el cierre de la respueta si no se cierrra da un error 
    })
    .listen(8080); // puerto por donde escucha el servicio
console.log('Escuchando en el puerto 8080');