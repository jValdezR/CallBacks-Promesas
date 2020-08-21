import './styles.css'
import {buscarHeroe} from './js/callbacks'

const heroeId = 'ironman';

//CallBack Hell
buscarHeroe(heroeId, (err, heroe) => {

    if (err) { return console.error(err); }

    buscarHeroe(heroeId2, (err, heroe2) => {
        if (err) { return console.error(err); }

        buscarHeroe(heroeId3, (err, heroe3) => {
            if (err) { return console.error(err); }

            console.log(`Enviando a ${heroe.nombre} y a ${heroe2.nombre} y a ${heroe3.nombre}`);
        });
    });
});