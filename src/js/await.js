import { buscarHeroeAsync,buscarHeroe } from './promesas'

const heroesId = ['capi', 'ironman', 'spidy',];

export const obtenerHeroesArr = async() => await Promise.all(heroesId.map(buscarHeroe));

    //Ta mal
    // setTimeout(() => {
    //     console.log('Obtener heroes')
    //     console.table(heroesArr);
    // }, 1000);
