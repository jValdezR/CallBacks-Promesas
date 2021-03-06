const heroes = {
    spidy: {
        nombre: 'Peter Parker',
        poder: 'Ser mordido y sobrevivir'
    },
    ironman: {
        nombre: 'Tony Stark',
        poder: 'Quedarse sin pila'
    },
    capi: {
        nombre: 'Rogers',
        poder: 'Traicionar a los compas'
    }
}


export const buscarHeroe = (id) => {

    const heroe = heroes[id];


    return new Promise((resolve, rejected) => {
        if (heroe) {
            setTimeout(() => resolve(heroe), 1000)


        } else {
            rejected('No existe el heroe ' + id)
        }
    });
}

export const buscarHeroeAsync = async (id) => {

    const heroe = heroes[id];



    if (heroe) {
        return (heroe);
    } else {
        throw ('No existe el heroe ' + id);

    }
}


const promesaLenta = new Promise((resolve, rejected) => {

    setTimeout(() =>
        resolve('Promesa lenta'), 3000);
});

const promesaMedia = new Promise((resolve, rejected) => {

    setTimeout(() =>
        resolve('Promesa media'), 2000);
});

const promesaRapida = new Promise((resolve, rejected) => {

    setTimeout(() =>
        resolve('Promesa rapida'), 1000);
});

export {
    promesaLenta, promesaMedia, promesaRapida
}