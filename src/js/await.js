import { buscarHeroeAsync, buscarHeroe } from './promesas'

const heroesId = ['capi', 'ironman', 'spidy',];
const heroesPromesas = heroesId.map(buscarHeroe);

export const obtenerHeroesArr = async () => await Promise.all(heroesId.map(buscarHeroe));

//Ta mal
// setTimeout(() => {
//     console.log('Obtener heroes')
//     console.table(heroesArr);
// }, 1000);

export const obtenerHeroeAwait = async (id) => {

    try {
        const heroe = await buscarHeroeAsync(id);

        return heroe;
    }
    catch (error) {
        consolelog(error);
        return {
            nombre: 'sin nombre',
            poder: 'sin poder'
        }
    }

}

export const heroesCiclo = async () => {
    console.time('HeroesCiclo');


    // heroesPromesas.forEach(async(p) => console.log(await p));

    for await (const heroe of heroesPromesas) {
        console.log(heroe);
    }




    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach(console.log)
    // console.log(heroes);
    console.timeEnd('HeroesCiclo');
}

export const heroeIfAwait = async (id) => {
    if ((await buscarHeroeAsync(id).nombre) === 'Ironman') {
        console.log('No me quiero ir señor Stark');
    }
    else {
        console.log('Ganamos señor Stark');
    }
}
