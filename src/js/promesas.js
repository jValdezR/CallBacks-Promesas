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


export const buscarHeroe = (id) =>{

    const heroe = heroes[id];


    return new Promise((resolve,rejected)=>{
        if(heroe){
            resolve(heroe)
        }else{
            rejected('No exixste el heroe')
        }
    });
}