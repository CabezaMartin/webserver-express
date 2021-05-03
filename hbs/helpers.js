//HELPERS
const hbs = require('hbs');
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabara, idx) => {
        palabras[idx] = palabara.charAt(0).toUpperCase() + palabara.slice(1).toLowerCase();
    });

    return palabras.join(' ');
})