import './styles.css'
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks'
import { buscarHeroe } from './js/promesas'


const heroeId = 'ironman';
const heroeId2 = 'spidy2';
const heroeId3 = 'capi'

//CallBack Hell
// buscarHeroe(heroeId, (err, heroe) => {
//     if (err) { return console.error(err); }

//     buscarHeroe(heroeId2, (err, heroe2) => {
//         if (err) { return console.error(err); }

//         buscarHeroe(heroeId3, (err, heroe3) => {
//             if (err) { return console.error(err); }

//             console.log(`Enviando a ${heroe.nombre} y a ${heroe2.nombre} y a ${heroe3.nombre}`);
//         });
//     });
// });

//Promise Hell
// buscarHeroe(heroeId).then(heroe => {
//     // console.log(`Enviando a ${heroe.nombre}`)
//     buscarHeroe(heroeId2).then(heroe2 => {
//         // console.log(`Enviando a ${heroe.nombre}`)
//         buscarHeroe(heroeId3).then(heroe3 => {
//             // console.log(`Enviando a ${heroe.nombre}`)

//         });
//     });
// });

Promise.all([buscarHeroe(heroeId),buscarHeroe(heroeId2),buscarHeroe(heroeId3)])
.then(([heroe1,heroe2,heroe3]) =>{
    
    //Forma normal
    //console.log(`Enviando a ${heroes[0].nombre}, ${heroes[1].nombre} y a ${heroes[2].nombre} a la mision`)

    //Forma desestructurada

    console.log(`Enviando a ${heroe1.nombre},${heroe2.nombre} y a ${heroe3.nombre} a la mision`)
}).catch(err =>{
    alert(err);
}).finally(()=>{
    console.log("Se terminó el promise.all")
})


console.log('Final del programa')