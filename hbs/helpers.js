const hbs = require('hbs');

// para mostrar el año en el footer
hbs.registerHelper('getAno', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('nombre', (text) => {
    let palabra = text.split(' ');
    palabra.forEach((elemento, indice) => {
        palabra[indice] = elemento.charAt(0).toUpperCase() + elemento.slice(1).toLowerCase();
    });
    return palabra.join(' ');
})