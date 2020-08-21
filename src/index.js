import './styles.css'
import {buscarHeroe} from './js/callbacks'

const heroeId = 'ironman';

buscarHeroe(heroeId,(heroe) =>{
    
    if(heroe){
        console.log(heroe);
    }
    else{
        console.error(Error)
    }
    
});