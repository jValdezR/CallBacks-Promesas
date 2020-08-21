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


export const buscarHeroe = (id,callback) =>{

    const heroe = heroes[id];


    callback(heroe);
}


