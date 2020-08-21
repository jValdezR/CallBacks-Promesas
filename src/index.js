import {promesaLenta,promesaMedia,promesaRapida} from './js/promesas'


//No hace falta el callback por que se recibe el primer argumento
// promesaLenta.then(console.log)
// promesaMedia.then(console.log)
// promesaRapida.then(console.log)


Promise.race([promesaLenta,promesaMedia,promesaRapida])
.then(console.log)