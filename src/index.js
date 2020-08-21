import {promesaLenta,promesaMedia,promesaRapida,buscarHeroe,buscarHeroeAsync} from './js/promesas'
import { obtenerHeroesArr } from './js/await'

//No hace falta el callback por que se recibe el primer argumento
// promesaLenta.then(console.log)
// promesaMedia.then(console.log)
// promesaRapida.then(console.log)


// Promise.race([promesaLenta,promesaMedia,promesaRapida])
// .then(console.log)

//Async

// buscarHeroe('capi2')
// .then(console.log)
// .catch(console.warn);

// buscarHeroeAsync('ironman')
// .then(console.log)
// .catch(console.warn);



obtenerHeroesArr().then(console.table)