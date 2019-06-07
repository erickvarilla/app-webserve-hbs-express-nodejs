const express = require('express')
const app = express()
const hbs = require('hbs');
// llamado de los helpers que son lineas de codigo que 
// van ser llamados cuando los templantes lo requieran 
require('./hbs/helpers');
// configuracion para er el uerto de escucha en heroku 
// heroku nos permite usar varibles globales como process
// en donde localmente env.port no va ha existir por eso colocamos el 
// operador o para decir que si no encuentra el puerto le coloque el 3000
//PARA DECIRLE A HEROKU QUE ARCHIVO ES EL QUE DEBE LLAMAR CONFIGURAMOS EL 
// PACKAGE.JSON  EN LOS SCRIPT
// Y AGREAGAR "START":"NODE NOMBRE DEL ARCHIVO QUE SE LANZA"
const port = process.env.port || 3000;
// UTILIZANDO UNA FUNCION MIDDLEWARE PARA HACER EL SERVICIO PUBLICO
// Y ASI MOSTRAR LO QUE DESEAMO QUE VEA EL USUARIO 
// EN UN RUTA ESTATICA 
// queremos cargar index.html que se encuentra dentro de la carpte public
// cuyo servicio lo lanzamos desde aqui 
// con una peticion estatica de express puedo lanzar ese servicio 
//  __dirname me proporciona la ruta absoluta y al concatenarle el direcctorio
// especifico busca automaticamente el archivo index.html
// si tiene otro nombre en la url hayq ue especificar la extencion 
// ej : /home.html esto es porque en la url buscara el dirrectorio home 
// y dentro de el buscara el fichero index.html
app.use(express.static(__dirname + '/public'));

// llamado de parciales de hbs sirve para hacer que nuestra aplicacion
// cargue bloques de html que se utilizaran en toda la pagina y no tener 
// lo mismo en todas partes
hbs.registerPartials(__dirname + '/views/partials');
// El uso de hbs como motor de visualización predeterminado requiere 
// solo una línea de código en la configuración de la aplicación. 
// Esto hará que los .hbs archivos cuando res.renderse llama.
app.set('view engine', 'hbs');
// las peticiones solo se haran en / por ejemplo si coloco /data surgira un error
// en cambio con el paquete http de node puede escuchar todas las peticiones 
// que le lanzen 
app.get('/', function(req, res) {


    res.render('home', { // este segundo parametro es para hacer una indentacion 
        // en la pagina web en las varibables nombres y añio 
        nombre: 'Eric Javier Varilla Lambertinez'

    });
    // res.send('Hello World')
    // let salida = {
    //         nombre: 'Eric',
    //         apellido: 'Varilla',
    //         Profesion: 'Ingenieria de Sistemas',
    //         url: req.url
    //     }
    //     // con express no es necesario castiar el json con JSON.stringify por que lo hace
    // internamente
    // res.send(salida);
})

// segundo llamda de la otra vista
app.get('/abaut', function(req, res) {


    res.render('abaut');

})
app.listen(port, () => { console.log(`Escuchando Peticion en el puerto ${port}`); });